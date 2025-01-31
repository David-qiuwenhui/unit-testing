import { it, expect, describe, vi } from "vitest";
import { tellName } from "./use-variable";
import { config, gold } from "./config";

vi.mock("./config", async (importOriginal) => {
  return {
    ...(await importOriginal()),
    name: "cxr-new",
  };
});

describe("use-variable", () => {
  it("use-variable", () => {
    const res = tellName();
    expect(res).toBe("cxr-new-heiheihei");
  });

  it("use-variable", () => {
    expect(config.allowTellAge).toBe(true);
    expect(gold).toBe(3);
  });
});
