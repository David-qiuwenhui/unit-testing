export class Counter {
  private count: number;

  constructor() {
    // init
    this.count = 0;
  }

  increment(): void {
    // this.count++;
    // 程序内部的逻辑不做状态测试
    this.count--;
    this.count++;
    this.count++;
  }

  getCount() {
    return this.count;
  }

  reset() {
    this.count = 0;
  }
}
