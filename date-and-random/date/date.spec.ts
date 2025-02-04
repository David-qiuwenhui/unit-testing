import { it, expect, describe, beforeEach, vi, afterEach } from "vitest";
import { checkFriday } from "./date";

describe("Date", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should be happy when it's Friday", () => {
    vi.setSystemTime(new Date(2025, 1, 7));
    const result = checkFriday();
    expect(result).toBe("happy");
  });

  it("should be sad when it's not Friday", () => {
    vi.setSystemTime(new Date(2025, 1, 4));
    const result = checkFriday();
    expect(result).toBe("sad");
  });
});
