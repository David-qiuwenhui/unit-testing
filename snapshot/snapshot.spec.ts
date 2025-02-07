import { it, expect, describe } from "vitest";
import Hi from "./Hi.vue";
import app from "./app.vue";
import { mount } from "@vue/test-utils";

describe("snapshot", () => {
  it("snapshot object ", () => {
    expect({
      a: 1,
      b: 2,
      c: 3,
    }).toMatchSnapshot();
  });

  it("snapshot array", () => {
    expect([1, 2, 3]).toMatchSnapshot();
  });

  it.todo("snapshot object ", () => {
    expect({
      a: 1,
      b: 2,
      c: 3,
    }).toMatchInlineSnapshot(`
      {
        "a": 1,
        "b": 2,
        "c": 3,
      }
    `);
  });

  it("snapshot component", () => {
    const wrapper = mount(Hi);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("snapshot component file", () => {
    const wrapper = mount(app);
    expect(wrapper.html()).toMatchFileSnapshot("./app.html");
  });
});
