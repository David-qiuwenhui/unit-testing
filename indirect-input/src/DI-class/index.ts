import { readFileSync } from "fs";
import { ReadAndProcessFile, FileReader } from "./ReadAndProcessFile";

export class TxtFileReader implements FileReader {
  read(filePath): string {
    const content = readFileSync(filePath, { encoding: "utf-8" });
    return content;
  }
}

const readAndProcessFile = new ReadAndProcessFile(new TxtFileReader());
console.log(readAndProcessFile.read("example.txt"));
