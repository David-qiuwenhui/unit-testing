// user.test.js
import { vi, it, expect, describe } from "vitest";
import { sendWelcomeEmail } from "./stub";
import { getUserEmail } from "./stub.database";

// stub测试桩 + spy测试间谍
vi.mock("./stub.database", () => {
  return {
    getUserEmail: vi.fn(() => "test@example.com"),
  };
});

it("sendWelcomeEmail sends email to the correct address", async () => {
  // stub测试桩
  const result = sendWelcomeEmail(123);
  expect(result).toBe("test@example.com");

  // spy测试间谍
  expect(getUserEmail).toBeCalled();
});
