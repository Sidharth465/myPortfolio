import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactNode } from "react";
import Home from "./index";
import { fetchResume } from "@utils/service";

vi.mock("@utils/service", () => ({
  fetchResume: vi.fn(),
}));

vi.mock("@library/components/AnimatedSection", () => ({
  default: ({ children, id }: { children: ReactNode; id?: string }) => (
    <section data-testid="animated-section" id={id}>
      {children}
    </section>
  ),
}));

vi.mock("@library/components/Page", () => ({
  default: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

vi.mock("@library/components/AnimatedAvatar", () => ({
  default: () => <div>Animated Avatar</div>,
}));

vi.mock("./Heading", () => ({
  default: () => <div>Heading Content</div>,
}));

describe("Home", () => {
  it("renders the hero CTA and summary labels", () => {
    render(<Home />);

    expect(
      screen.getByRole("button", { name: /download resume/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Companies")).toBeInTheDocument();
  });

  it("shows processing state while downloading the resume", async () => {
    let resolveDownload: (() => void) | undefined;

    vi.mocked(fetchResume).mockImplementation(
      () =>
        new Promise<void>((resolve) => {
          resolveDownload = resolve;
        }),
    );

    const user = userEvent.setup();
    render(<Home />);

    await user.click(
      screen.getByRole("button", { name: /download resume/i }),
    );

    expect(fetchResume).toHaveBeenCalledWith("/resume");
    expect(screen.getByText("Processing...")).toBeInTheDocument();

    resolveDownload?.();

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /download resume/i }),
      ).toBeInTheDocument();
    });
  });
});
