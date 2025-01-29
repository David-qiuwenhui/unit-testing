import { test, describe, expect } from "../core.js";

describe("describe suit", () => {
  test("sub: first test", () => {
    console.log("sub: first test");
    expect(123).toBe(123);
  });
});

// run();
