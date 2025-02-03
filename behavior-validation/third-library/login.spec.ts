import { vi, it, expect, describe } from "vitest";
import { cxrLogin } from "cxr";
import { login, loginV2 } from "./login";

vi.mock("./login.ts", () => {
  return {
    cxrLogin: vi.fn(),
    // cxrLogin: vi.fn(() => true),
  };
});

describe("login", () => {
  it("should called login function from cxr  ", () => {
    login("cxr", "jiubugaosuni");

    // 逻辑被调用
    expect(cxrLogin).toBeCalled();
    // 逻辑被调用一次
    expect(cxrLogin).toBeCalledTimes(1);
    // 逻辑被调用的参数
    expect(cxrLogin).toBeCalledWith("cxr", "jiubugaosuni");
  });

  it("v2", () => {
    loginV2("cxr", "jiubugaosuni");

    expect(cxrLogin).toBeCalled();
    expect(getTip()).toBe("登录成功拉");
  });
});
