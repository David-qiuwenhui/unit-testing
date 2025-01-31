import { it, expect, describe, vi, beforeEach } from "vitest";
import { fetchUserAge, userAge } from "../src/case1/user";
import { doubleUserAge } from "../src/case1/index";

// describe("happy path", () => {
//   it("add", () => {
//     expect(1 + 2).toBe(3);
//   });
// });

// mock 全局mock
// stub
// vi.mock("../src/case1/user", () => {
//   return {
//     userAge: () => 8,
//   };
// });

// mock2: 局部mock
// vi.mock("../src/case1/user");

// describe("doubleUserAge", () => {
//   it("should double user age", () => {
//     vi.mocked(userAge).mockReturnValue(10);
//     const result = doubleUserAge();
//     expect(result).toBe(20);
//   });
// });

// mock3: 局部mock beforeEach
// vi.mock("../src/case1/user");

describe("doubleUserAge", () => {
  beforeEach(() => {
    // vi.doMock 只有在import的时候才会生效
    // 且只会在作用域内生效
    vi.doMock("../src/case1/user", () => {
      return {
        userAge: () => 9,
      };
    });
  });

  it("should double user age", async () => {
    const { doubleUserAge } = await import("../src/case1/index");
    const result = doubleUserAge();
    expect(result).toBe(18);
  });
});

// mock4: 异步mock
vi.mock("../src/case1/user", () => {
  return {
    fetchUserAge: () => {
      return Promise.resolve(28);
    },
  };
});

describe("async function", () => {
  it("async fetchUserAge", async () => {
    const result = await fetchUserAge();
    expect(result).toBe(28);
  });
});
