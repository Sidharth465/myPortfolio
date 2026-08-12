import { readFileSync, readdirSync, statSync } from "node:fs";
import { execSync } from "node:child_process";
import { extname, join } from "node:path";

const MAX_LINES = Number(process.env.MAX_FILE_LINES ?? 500);
const SOURCE_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx"]);
const SCAN_ROOT = "src";
const IGNORE_DIRS = new Set(["node_modules", "dist", "coverage"]);

function isSourceFile(filePath) {
  return SOURCE_EXTENSIONS.has(extname(filePath));
}

function walkDir(dir) {
  const files = [];

  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      if (!IGNORE_DIRS.has(entry)) {
        files.push(...walkDir(fullPath));
      }
      continue;
    }

    if (isSourceFile(fullPath)) {
      files.push(fullPath);
    }
  }

  return files;
}

function getChangedFilesInPr() {
  const baseRef = process.env.GITHUB_BASE_REF ?? "main";

  try {
    execSync(`git fetch origin ${baseRef} --depth=1`, { stdio: "pipe" });

    const output = execSync(
      `git diff --name-only --diff-filter=ACMRT origin/${baseRef}...HEAD`,
      { encoding: "utf8" },
    );

    return output
      .trim()
      .split("\n")
      .filter((file) => file && isSourceFile(file));
  } catch (error) {
    console.warn(
      `Could not diff against origin/${baseRef}, checking all source files instead.`,
    );
    console.warn(error instanceof Error ? error.message : error);
    return walkDir(SCAN_ROOT);
  }
}

function getFilesToCheck() {
  if (process.env.GITHUB_EVENT_NAME === "pull_request") {
    return getChangedFilesInPr();
  }

  return walkDir(SCAN_ROOT);
}

function countLines(filePath) {
  return readFileSync(filePath, "utf8").split("\n").length;
}

const files = getFilesToCheck();

if (files.length === 0) {
  console.log("No source files to check.");
  process.exit(0);
}

const violations = files
  .map((file) => ({ file, lines: countLines(file) }))
  .filter(({ lines }) => lines > MAX_LINES);

if (violations.length > 0) {
  console.error(`Files must not exceed ${MAX_LINES} lines:\n`);
  for (const { file, lines } of violations) {
    console.error(`  ${file}: ${lines} lines`);
  }
  process.exit(1);
}

console.log(
  `All ${files.length} checked file(s) are at or under ${MAX_LINES} lines.`,
);
