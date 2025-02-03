/**
 * 初始逻辑
 */
// import { readFileSync } from "fs";
// export function readAndProcessFile(filePath: string): string {
//   const content = readFileSync(filePath, { encoding: "utf-8" });
//   return content + "->unit test";
// }

/**
 * 重构1
 * @param filePath 需要解析的文件路径
 * @returns
 */
// export interface FileReader {
//   read(filePath: string): string;
// }

// export function readAndProcessFile(
//   filePath: string,
//   fileReader: FileReader
// ): string {
//   const content = fileReader.read(filePath);
//   return content + "->unit test";
// }

/**
 * 重构2
 * @param filePath 需要解析的文件路径
 * @returns
 */

export interface FileReader {
  read(filePath: string): string;
}

export class ReadAndProcessFile {
  _fileReader: FileReader;
  constructor(fileReader) {
    this._fileReader = fileReader;
  }

  read(filePath: string) {
    const content = this._fileReader.read(filePath);

    return content + "->unit test";
  }
}

/**
 * 重构3
 * 属性
 */
export class ReadAndProcessFileAttribute {
  fileReader: FileReader;
  constructor(fileReader?) {
    if (fileReader) {
      this.fileReader = fileReader;
    }
  }

  read(filePath: string) {
    const content = this.fileReader.read(filePath);
    return content + "->unit test";
  }

  get() {
    return this.fileReader;
  }

  set(fileReader: FileReader) {
    this.fileReader = fileReader;
  }
}

/**
 * 重构4
 * 函数
 */
export class ReadAndProcessFileFunction {
  fileReader: FileReader;
  constructor(fileReader?) {
    if (fileReader) {
      this.fileReader = fileReader;
    }
  }

  read(filePath: string) {
    const content = this.fileReader.read(filePath);
    return content + "->unit test";
  }

  setFileReader(fileReader: FileReader) {
    this.fileReader = fileReader;
  }
}
