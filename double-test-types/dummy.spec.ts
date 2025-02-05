import { test, beforeEach, it, expect, describe } from "vitest";
import { Recipient, sendEmail } from "./dummy";

describe("EmailService", () => {
  // 方式一：创造一个哑元对象
  it("dummy v1: should send email", () => {
    const message = {
      subject: "Test Subject",
      body: "Test Body",
    };

    // 哑元对象
    const dummyRecipient: Recipient = {
      email: "",
      name: "",
    };
    sendEmail(message, dummyRecipient);
  });
});

// 方式二：使用类型断言
it("dummy v1", () => {
  const message = {
    subject: "subject",
    body: "body",
  };

  // 核心就是和当前要测试的功能无关的代码不要写
  // 哑元对象
  const dummyRecipient = {} as Recipient;
  sendEmail(message, dummyRecipient);
});
