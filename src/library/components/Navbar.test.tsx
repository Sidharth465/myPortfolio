import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NavProvider } from "@library/context/NavContext";
import Navbar from "./Navbar";

const sectionPositions: Record<string, number> = {
  home: 0,
  experience: 600,
  skills: 1200,
  projects: 1800,
  contactus: 2400,
};

function renderNavbar() {
  return render(
    <NavProvider>
      <Navbar />
      <main>
        {Object.keys(sectionPositions).map((id) => (
          <section key={id} id={id} />
        ))}
      </main>
    </NavProvider>,
  );
}

describe("Navbar scroll behavior", () => {
  beforeEach(() => {
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 0,
    });
    Object.defineProperty(window, "innerHeight", {
      configurable: true,
      value: 768,
    });
    Object.defineProperty(document.documentElement, "scrollHeight", {
      configurable: true,
      value: 3000,
    });
    vi.spyOn(HTMLElement.prototype, "offsetHeight", "get").mockImplementation(
      function (this: HTMLElement) {
        return this.tagName === "HEADER" ? 64 : 0;
      },
    );
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
      function (this: HTMLElement) {
        const sectionTop = sectionPositions[this.id];
        return new DOMRect(
          0,
          sectionTop === undefined ? 0 : sectionTop - window.scrollY,
          0,
          100,
        );
      },
    );
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      callback(0);
      return 0;
    });
    vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("does not activate the clicked section before scrolling reaches it", () => {
    renderNavbar();

    fireEvent.click(screen.getByRole("link", { name: "Projects" }));

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 1736,
      behavior: "smooth",
    });
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: "Projects" })).not.toHaveAttribute(
      "aria-current",
    );
  });

  it("activates the section after scrolling reaches its threshold", () => {
    renderNavbar();

    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 1780,
    });
    fireEvent.scroll(window);

    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });
});
