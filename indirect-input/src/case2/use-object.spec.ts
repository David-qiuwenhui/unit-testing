import { it, expect, describe } from "vitest";
import { config } from "./config";
import { returnConfigUserAge, tellAge } from "./use-object";

describe("使用对象的形式", () => {
  it("修改allowTellAge为false", () => {
    config.allowTellAge = false;

    const res = tellAge();
    expect(res).toBe("就不告诉你");
  });

  it("修改allowTellAge为true", () => {
    config.allowTellAge = true;

    const res = tellAge();
    expect(res).toBe(18);
  });

  it("修改getAge", () => {
    config.getAge = () => {
      return 30;
    };

    const res = returnConfigUserAge();
    expect(res).toBe(30);
  });
});
