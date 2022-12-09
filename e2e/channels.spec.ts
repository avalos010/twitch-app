import { test, expect, Page } from "@playwright/test";

test.describe("Channels", () => {
  test.only("channels loads iframe", async ({ page }) => {
    await page.goto(`/channels/steveclaus`);
    const iframe = page.locator("iframe");

    await expect(iframe).toBeVisible();
  });
});
