import { it, expect, describe, vi } from "vitest";
import { generateRandomString } from "./random";

describe("Math.random", () => {
  it("mockImplementationOnce random return 0.1", () => {
    vi.spyOn(Math, "random").mockImplementationOnce(() => {
      return 0.1;
    });
    vi.spyOn(Math, "random").mockImplementationOnce(() => {
      return 0.1;
    });
    const result = generateRandomString(2);
    expect(result).toBe("cc");
  });

  it("mockImplementation random return 0.2", () => {
    vi.spyOn(Math, "random").mockImplementation(() => {
      return 0.2;
    });

    const result = generateRandomString(2);
    expect(result).toBe("ff");
  });
});
