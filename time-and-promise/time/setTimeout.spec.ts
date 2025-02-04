import { it, expect, describe, vi, beforeEach, afterEach } from "vitest";
import { User } from "./setTimeout";

describe("setTimeout", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("fetchData", (done) => {
    const user = new User("123");
    const callback = vi.fn();

    user.fetchData(callback, 1000);

    // vi.advanceTimersByTime(1000);
    // vi.runAllTimers();
    vi.advanceTimersToNextTimer();
    expect(user.id).toBe("123");
    expect(callback).toHaveBeenCalledWith("Data for user with id: 123");
  });
  it("fetchDataV2", (done) => {
    const user = new User("123");
    const callback = vi.fn();
    user.fetchData(callback, 1000);
    vi.runAllTimers();
    expect(user.id).toBe("123");
    expect(callback).toHaveBeenCalledWith("Data for user with id: 123");
  });
});
