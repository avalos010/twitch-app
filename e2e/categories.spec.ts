import { test, expect } from "@playwright/test";

test("Input to be visible in categories", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  const input = page.locator("input[type=text]");
  await expect(input).toBeVisible();
});
