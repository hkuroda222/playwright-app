import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  // titleがReact Appになっているかテスト
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveTitle(/React App/);

  // pタグのテキストのテスト
  const text = page.locator("p"); // locatorでタグを取得
  await expect(text).toHaveText(/playwrigth test/);
});
