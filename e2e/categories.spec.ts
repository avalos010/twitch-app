import { test, expect, Page } from "@playwright/test";
test.describe("Categories", () => {
  const input = (page: Page) => page.locator("input[type=text]");
  const card = (page: Page) => page.locator("[data-testid=card]").nth(0);
  const videoCard = (page: Page) =>
    page.locator("[data-testid=video-card]").nth(0);

  const searchForResults = async (page) => {
    const searchButton = page.getByRole("button", { name: "Search" });
    await input(page).fill("call of duty");
    await searchButton.click();
  };

  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL as string);
  });

  test("Input to be visible in categories", async ({ page }) => {
    await expect(input(page)).toBeVisible();
  });
  test("input search returns correct results", async ({ page }) => {
    const cardTitle = card(page).locator("h5");

    searchForResults(page);
    await expect(card(page)).toBeVisible();
    await expect(cardTitle).toContainText("call of duty", { ignoreCase: true });
  });

  test("load clip cards when button 'Watch Clips' is clicked", async ({
    page,
  }) => {
    searchForResults(page);
    page.waitForNavigation();

    await card(page).getByRole("link", { name: "Watch Clips" }).click();
    await expect(videoCard(page)).toBeVisible();
  });
});
