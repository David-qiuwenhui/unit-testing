import axios from "axios";
import { it, expect, describe, vi } from "vitest";
import { doubleUserAge } from "./third-party-modules";

// mock third party modules
vi.mock("axios");

describe("Third party modules", async (params) => {
  it("should be able to mock third party modules", async () => {
    // vi.mocked(axios).mockResolvedValue({ name: "yyx", age: 20 });
    vi.mocked(axios.get).mockResolvedValue({ name: "yyx", age: 20 });

    const res = await doubleUserAge();
    expect(res).toBe(40);
  });
});
