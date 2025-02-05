import { vi, test, expect, describe } from "vitest";
import { user } from "./spy";

test("spy", () => {
  // spy测试间谍
  vi.spyOn(user, "getName");
  const result = user.getName();

  expect(user.getName).toBeCalled();
  expect(result).toBe("cxr");
});

test("spy + stub", () => {
  // spy测试间谍 + stub测试桩
  vi.spyOn(user, "getName").mockImplementation(() => "qwh");
  const result = user.getName();

  expect(user.getName).toBeCalled();
  expect(result).toBe("qwh");
});
