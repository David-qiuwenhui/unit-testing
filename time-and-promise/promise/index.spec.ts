import { it, expect, describe, vi } from "vitest";
import { delay, fetchUserData } from "./index";

describe("Promise", () => {
  it("fetchUserData", async () => {
    const result = await fetchUserData();
    expect(result).toBe("1");
  });

  it("expect resolve fetchUserData", async () => {
    const result = fetchUserData();
    expect(result).resolves.toBe("1");
  });

  it("delay", () => {
    vi.useFakeTimers();
    const result = delay(1000);
    vi.advanceTimersToNextTimer();
    expect(result).resolves.toBe("ok");
  });
});
