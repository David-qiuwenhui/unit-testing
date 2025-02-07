import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // happy-dom jsdom node edge-runtime
    environment: "happy-dom",
  },
});
