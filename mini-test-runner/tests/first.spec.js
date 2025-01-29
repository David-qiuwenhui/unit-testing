import {
  test,
  it,
  describe,
  expect,
  beforeEach,
  beforeAll,
  afterAll,
  afterEach,
} from "../core.js";

beforeAll(() => {
  console.log("beforeAll......");
});

beforeEach(() => {
  console.log("beforeEach......");
});

afterAll(() => {
  console.log("afterAll......");
});

afterEach(() => {
  console.log("afterEach......");
});

test("first test", () => {
  console.log("first test");
  expect(123).toBe(123);
  expect(123).toBe(456);
});

it("twice test", () => {
  console.log("twice test");
});

// it.only("test only", () => {
//   console.log("test only");
// });

describe("describe suit", () => {
  test("sub: first test", () => {
    console.log("sub: first test");
  });
});

// run();
