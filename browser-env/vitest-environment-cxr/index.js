export default {
  // 自定义环境
  // https://cn.vitest.dev/config/#environment
  // 从 0.23.0 开始，你还可以定义自定义环境。 当使用非内置环境时，Vitest 将尝试加载包 vitest-environment-${name}。 该包应导出一个具有 Environment 属性的对象
  name: "custom cxr",
  setup(global) {
    console.log(" vitest - env - cxr");
    global.localStorage = {
      getItem() {},
      setItem() {},
    };

    return {
      teardown() {
        // called after all tests with this env have been run
      },
    };
  },
};
