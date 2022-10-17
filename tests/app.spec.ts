import { test, expect } from "@playwright/test";

test("App.tsx", async ({ page }) => {
  // titleがReact Appになっているかテスト
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveTitle(/React App/);

  // pタグのテキストのテスト
  const text = page.locator("p"); // locatorでタグを取得
  await expect(text).toHaveText(/Playwrigt/);

  //aタグのテスト
  const learnReact = page.getByText("Learn React");
  await expect(learnReact).toHaveAttribute("href", "https://reactjs.org");
  await learnReact.click();
});
