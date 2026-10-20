import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchResume } from "./service";

describe("fetchResume", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("opens the Google Drive file as a download in a new tab", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    fetchResume();

    expect(openSpy).toHaveBeenCalledWith(
      "https://drive.google.com/uc?export=download&id=1OpYE1Iyizt2yGmoZMyeEUOJTB3F-v0Av",
      "_blank",
      "noopener,noreferrer",
    );
  });
});
