import { it, expect, describe, vi } from "vitest";
import { sayHi } from "./setInterval";

describe("setInterval", () => {
  it("setInterval", () => {
    vi.useFakeTimers();
    vi.spyOn(console, "log");
    sayHi();
    vi.advanceTimersByTime(1100);
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toBeCalledWith("hi");
  });
});
