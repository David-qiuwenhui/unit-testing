const tests = [];
const onlys = [];
const beforeAlls = [];
const beforeEachs = [];
const afterAlls = [];
const afterEachs = [];

// test
export function test(name, callback) {
  tests.push({ name, callback });
}
test.only = function (name, callback) {
  onlys.push({ name, callback });
};

// it
export function it(name, callback) {
  tests.push({ name, callback });
}
it.only = function (name, callback) {
  onlys.push({ name, callback });
};

export function describe(name, callback) {
  callback();
}

// expect
export function expect(actual) {
  return {
    toBe(expected) {
      if (expected === actual) {
        console.log("ok");
      } else {
        throw new Error(`fail actual: ${actual}, expect: ${expected}`);
      }
    },
  };
}

// beforeAll
export function beforeAll(callback) {
  beforeAlls.push(callback);
}

// beforeEach
export function beforeEach(callback) {
  beforeEachs.push(callback);
}

// beforeAll
export function afterAll(callback) {
  afterAlls.push(callback);
}

// beforeEach
export function afterEach(callback) {
  afterEachs.push(callback);
}

// run
export function run() {
  // beforeAll
  beforeAlls.forEach((beforeAllCallback) => {
    beforeAllCallback();
  });

  // test instance
  const suit = onlys.length > 0 ? onlys : tests;
  suit.forEach((test) => {
    // beforeEach
    beforeEachs.forEach((beforeEachCallback) => {
      beforeEachCallback();
    });

    try {
      test.callback();
      console.log(`ok: ${test.name}`);
    } catch (error) {
      console.warn(`fail: ${error}`);
    }

    // afterEach
    afterEachs.forEach((afterEachCallback) => {
      afterEachCallback();
    });
  });

  // afterAll
  afterAlls.forEach((afterAllCallback) => {
    afterAllCallback();
  });
}
