// 获取到所有的测试脚本 *.spec.js
// 执行这些脚本
import glob from "glob";
import fs from "fs/promises";
import { build } from "esbuild";

console.log("cwd......", process.cwd());

const files = glob.sync("**/*.spec.js");
for (const file of files) {
  const fileContent = await fs.readFile(file, "utf-8");

  // 执行函数
  const res = await runModule(fileContent);
  new Function(res.outputFiles[0].text)();
}

async function runModule(fileContent) {
  const result = await build({
    stdin: {
      contents: fileContent + 'import { run } from "../core.js"; run();',
      resolveDir: "tests",
      //   resolveDir: `${process.cwd()}/tests`,
    },
    write: false,
    bundle: true,
    target: "esnext",
  });

  return result;
}
