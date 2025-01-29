import { test, describe, expect } from "vitest";
import { add } from "../index";

describe("happy path", () => {
  test("1 + 1 = 2", () => {
    expect(add(1, 1)).toBe(2);
  });
});
