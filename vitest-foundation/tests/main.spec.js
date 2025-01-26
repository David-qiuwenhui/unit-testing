import {
  expect,
  describe,
  it,
  beforeAll,
  afterAll,
  beforeEach,
  afterEach,
} from "vitest";
import { add } from "../main";

describe("happy path", () => {
  it("add", () => {
    const res = add(1, 2);
    expect(res).toBe(3);
  });
});

describe("base api", () => {
  it("add", () => {
    const res = add(1, 2);
    expect(res).toBe(3);
  });

  // only
  //   it.only("add", () => {
  //     const res = add(3, 4);
  //     expect(res).toBe(7);
  //   });

  // skip
  //   it.skip("add", () => {
  //     const res = add(3, 4);
  //     expect(res).toBe(7);
  //   });

  // todo
  it.todo("todo", () => {});
});

describe("assert api", () => {
  it("toBe", () => {
    expect(123).toBe(123);
  });

  it("toEqual", () => {
    const user = {
      name: "xiaohong",
    };
    expect(user).toEqual({
      name: "xiaohong",
    });
  });

  it("toBeTruthy", () => {
    expect(true).toBeTruthy();
    expect(1).toBeTruthy();
    expect("1").toBeTruthy();
  });

  it("toBeFalsy", () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
  });

  it("toContain", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [7, 8, 9];

    const list = [arr1, arr2];

    expect(list).toContain(arr1);
    expect(list).toContain(arr1, arr2);
    expect(list).toContainEqual(arr1);
  });

  it("toThrow", () => {
    function getName(name) {
      if (typeof name !== "string") {
        throw new Error("name is not string type");
      }
      return name;
    }

    expect(() => {
      getName(123);
    }).toThrow("name is not string type");
  });
});

// Setup and Teardown
// 生命周期 beforeAll -> beforeEach -> afterEach -> afterAll
beforeAll(() => {
  // 数据库的连接
  // 创建临时文件
  console.log("beforeAll......");

  // 清理函数 === afterAll
  return () => {
    console.log("beforeAll callback......");
  };
});

afterAll(() => {
  // 数据库 断开连接
  // 临时文件 就需要删除
  console.log("afterAll......");
});

describe("hook", () => {
  beforeEach(() => {
    console.log("beforeEach");
    return () => {
      console.log("beforeEach callback");
    };
  });

  afterEach(() => {
    console.log("afterEach......");
  });
  it("a", () => {
    expect(123).toBe(123);
  });
  it("b", () => {
    expect(456).toBe(456);
  });
});
