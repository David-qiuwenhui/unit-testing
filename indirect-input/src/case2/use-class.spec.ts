import { it, expect, describe, vi } from "vitest";
import { User } from "./User";
import { doubleUserAge } from "./use-class";

vi.mock("./User.ts", () => {
  return {
    User: class {
      age: number = 2;
    },
  };
});

describe("类形式的Mock", () => {
  it("class User", () => {
    const age = doubleUserAge();
    expect(age).toBe(4);
  });
});
