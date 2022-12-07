import { test, expect, Page } from "@playwright/test";
test.describe("Categories", () => {
  const input = (page: Page) => page.locator("input[type=text]");
  const card = (page: Page) => page.locator("[data-testid=card]").nth(0);

  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/");
  });

  test("Input to be visible in categories", async ({ page }) => {
    await expect(input(page)).toBeVisible();
  });
  test("input search returns correct results", async ({ page }) => {
    const input = page.locator("input[type=text]");
    const searchButton = page.getByRole("button", { name: "Search" });
    await input.fill("call of duty");
    await searchButton.click();
    const cardTitle = card(page).locator("h5");
    await expect(card(page)).toBeVisible();
    await expect(cardTitle).toContainText("call of duty", { ignoreCase: true });
  });
});
