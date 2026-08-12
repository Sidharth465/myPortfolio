import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactNode } from "react";
import Projects from "./index";
import { Strings } from "@utils/constants";

vi.mock("@library/components/AnimatedSection", () => ({
  default: ({ children, id }: { children: ReactNode; id?: string }) => (
    <section data-testid="animated-section" id={id}>
      {children}
    </section>
  ),
}));

vi.mock("@library/components/RevealItem", () => ({
  default: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

const webProjects = Strings.projectsData.filter((project) =>
  project.category.toLowerCase().includes("web"),
);

const mobileProjects = Strings.projectsData.filter(
  (project) => !project.category.toLowerCase().includes("web"),
);

describe("Projects", () => {
  it("renders the section heading and project stats", () => {
    render(<Projects />);

    expect(
      screen.getByRole("heading", { name: /featured projects/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(Strings.projectsData.length.toString())).toBeInTheDocument();
    expect(screen.getByText(/a showcase of my recent projects/i)).toBeInTheDocument();
  });

  it("shows all projects by default", () => {
    render(<Projects />);

    for (const project of Strings.projectsData) {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    }
  });

  it("filters to web projects when Web is selected", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    await user.click(screen.getByRole("button", { name: "Web" }));

    for (const project of webProjects) {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    }

    for (const project of mobileProjects) {
      expect(screen.queryByText(project.name)).not.toBeInTheDocument();
    }
  });

  it("filters to mobile projects when Mobile is selected", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    await user.click(screen.getByRole("button", { name: "Mobile" }));

    for (const project of mobileProjects) {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    }

    for (const project of webProjects) {
      expect(screen.queryByText(project.name)).not.toBeInTheDocument();
    }
  });

  it("expands a project card to show key highlights", async () => {
    const user = userEvent.setup();
    const project = Strings.projectsData[0];

    render(<Projects />);

    expect(screen.queryByText("Key Highlights")).not.toBeInTheDocument();

    await user.click(screen.getByText(project.name));

    expect(screen.getByText("Key Highlights")).toBeInTheDocument();
    expect(screen.getByText(project.highlights[0])).toBeInTheDocument();
  });

  it("renders visit site links for web projects", () => {
    render(<Projects />);

    const webProjectWithLink = webProjects.find((project) => project.link);
    expect(webProjectWithLink).toBeDefined();

    const visitLinks = screen.getAllByRole("link", { name: /visit site/i });
    const matchingLink = visitLinks.find(
      (link) => link.getAttribute("href") === webProjectWithLink!.link,
    );

    expect(matchingLink).toBeDefined();
  });
});
