import { vi, it, expect, describe } from "vitest";

import { log, logObj } from "./log";

describe("spy", () => {
  it("log", () => {
    // spyOn
    // vi.spyOn(logObj, "addData");
    // console.log(logObj.addData);

    // logObj.addData = vi.fn();
    console.log(logObj.addData);
  });
});
