import { it, expect, describe } from "vitest";
import {
  FileReader,
  ReadAndProcessFile,
  ReadAndProcessFileAttribute,
  ReadAndProcessFileFunction,
} from "./ReadAndProcessFile";

describe("di function", () => {
  it("构造函数 ReadAndProcessFile", () => {
    class StubFileReader implements FileReader {
      read(filePath: string): string {
        return "cxr";
      }
    }

    const readAndProcessFile = new ReadAndProcessFile(new StubFileReader());
    expect(readAndProcessFile.read("test.txt")).toBe("cxr->unit test");
  });

  it("属性 ReadAndProcessFileAttribute", () => {
    class StubFileReader implements FileReader {
      read(filePath: string): string {
        return "cxr";
      }
    }

    const readAndProcessFile = new ReadAndProcessFileAttribute();
    readAndProcessFile.fileReader = new StubFileReader();

    expect(readAndProcessFile.read("test.txt")).toBe("cxr->unit test");
  });

  it("函数 ReadAndProcessFileFunction", () => {
    class StubFileReader implements FileReader {
      read(filePath: string): string {
        return "cxr";
      }
    }

    const readAndProcessFile = new ReadAndProcessFileFunction();
    readAndProcessFile.setFileReader(new StubFileReader());

    expect(readAndProcessFile.read("test.txt")).toBe("cxr->unit test");
  });
});
