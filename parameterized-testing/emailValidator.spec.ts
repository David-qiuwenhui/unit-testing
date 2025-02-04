import { it, expect, describe } from "vitest";
import { emailValidator } from "./emailValidator";

// 原始的测试代码
describe("email validator v1", () => {
  it("should return true for valid email", () => {
    const email = "valid-email@example.com";
    expect(emailValidator(email)).toBe(true);
  });

  it("should return false for invalid email without domain extension", () => {
    const email = "invalid.email@example";
    expect(emailValidator(email)).toBe(false);
  });

  it("should return false for invalid email with extra dot at the end", () => {
    const email = "another.invalid.email@example.";
    expect(emailValidator(email)).toBe(false);
  });

  it("should return false for invalid email with missing '@'", () => {
    const email = "yet.another.invalid.email.example.com";
    expect(emailValidator(email)).toBe(false);
  });
});

// 使用 it.each 重构测试代码 nodejs的format占位符
// https://nodejs.org/docs/latest/api/util.html
describe("email validator v2", () => {
  it.each([
    ["valid-email@example.com", true],
    ["invalid.email@example", false],
    ["another.invalid.email@example.", false],
    ["yet.another.invalid.email.example.com", false],
  ])("when email is %s should return %s", (email, expected) => {
    expect(emailValidator(email)).toBe(expected);
  });
});

// 使用 it.each 重构测试代码 对象形式
describe("email validator v3", () => {
  it.each([
    { email: "valid-email@example.com", expected: true },
    { email: "invalid.email@example", expected: false },
    { email: "another.invalid.email@example.", expected: false },
    { email: "yet.another.invalid.email.example.com", expected: false },
  ])("should return $expected when email is $email", ({ email, expected }) => {
    expect(emailValidator(email)).toBe(expected);
  });
});

// 使用 it.each 重构测试代码 模板字面量形式
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
describe("email validator v4", () => {
  it.each`
    email                                      | expected
    ${"valid-email@example.com"}               | ${true}
    ${"invalid.email@example"}                 | ${false}
    ${"another.invalid.email@example."}        | ${false}
    ${"yet.another.invalid.email.example.com"} | ${false}
  `("should return $expected when email is $email", ({ email, expected }) => {
    expect(emailValidator(email)).toBe(expected);
  });
});

// 使用 it.each 重构测试代码 模板字面量形式
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
describe("email validator v5", () => {
  it.each`
    email                                             | expected
    ${{ a: "valid-email@example.com" }}               | ${true}
    ${{ a: "invalid.email@example" }}                 | ${false}
    ${{ a: "another.invalid.email@example." }}        | ${false}
    ${{ a: "yet.another.invalid.email.example.com" }} | ${false}
  `("should return $expected when email is $email.a", ({ email, expected }) => {
    expect(emailValidator(email.a)).toBe(expected);
  });
});
