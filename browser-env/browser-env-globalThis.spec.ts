import { test, expect } from "vitest";
import { getName } from "./browser-env";

test("browser-env", () => {
  // globalThis 是 Vitest 中访问全局作用域的统一方式，适合在测试中定义或访问全局变量。
  globalThis.localStorage = {
    getItem(key: string) {
      return "cxr";
    },
    setItem(key: string, value: string) {},
    removeItem(key: string) {},
    clear() {},
    key(index: number) {
      return null;
    },
    get length() {
      return 0;
    },
  };

  localStorage.setItem("name", "cxr");
  expect(getName()).toBe("cxr");
});
