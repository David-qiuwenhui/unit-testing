import { OrderProcessor } from "./orderProcessor";
import { vi, test, expect, describe } from "vitest";
import { sendEmail } from "./EmailService";

vi.mock("./EmailService", () => {
  return {
    // spy 测试间谍
    sendEmail: vi.fn(),
  };
});

vi.mock("./InventoryService.ts", () => {
  return {
    // stub 测试桩
    checkStock() {
      return true;
    },
  };
});

// 独居测试
test("processOrder should succeed when there is enough stock", () => {
  const orderProcessor = new OrderProcessor();
  orderProcessor.processOrder({ name: "hei", count: 1 });

  expect(sendEmail).toBeCalled();
});
