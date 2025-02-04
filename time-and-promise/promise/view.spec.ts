import { it, expect, describe } from "vitest";
import { View } from "./view";
import flushPromises from "flush-promises";

describe("Many Promise", () => {
  it("view render promise ", async () => {
    const view = new View();

    view.render();
    await flushPromises();

    expect(view.count).toBe(3);
  });
});

/**
 * flushPromises
var scheduler = typeof setImmediate === "function" ? setImmediate : setTimeout;

function flushPromises() {
  return new Promise(function (resolve) {
    scheduler(resolve);
  });
}
module.exports = flushPromises;
 */
