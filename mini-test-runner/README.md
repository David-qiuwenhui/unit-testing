# mini test runner

任务：

1. test, it
2. expect, toBe
3. test.only
4. 提示是否通过/报错
5. beforeAll, beforeEach, afterAll, afterEach
6. describe
7. 自动执行所有的测试脚本 `*.spec.js`

自动执行所有的测试脚本：
`glob` 获取所有匹配文件名的脚本
`fs.promise` 异步读取脚本的内 j
`new Function(fileContent)()` 执行脚本文件的内容

解决 ESModule 语法报错的问题：
esbuild 打包器 `esbuild`
