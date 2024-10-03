const { test, expect } = require("@playwright/test");
test.beforeEach(async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
});

test("TC01", async ({ page }) => {
  await page.getByLabel("Username").fill("student");
  await page.getByLabel("Password").fill("Password123");
  await page.getByRole("button", { name: "Submit" }).click();
  console.log(page.url());
  // ตรวจสอบว่า URL ถูกต้องหรือไม่
  const currentUrl = page.url();
  expect(currentUrl).toBe('https://practicetestautomation.com/logged-in-successfully/');
  //   await page.screenshot({ path: "./screenshot/screenshot_login.png" });
});
test("TC02", async ({ page }) => {
  await page.getByLabel("Username").fill("incorrectUse");
  await page.getByLabel("Password").fill("Password123");
  await page.getByRole("button", { name: "Submit" }).click();
   // รอให้ข้อความแสดงข้อผิดพลาดปรากฏ
   await page.waitForSelector("#error");

   // ตรวจสอบข้อความแสดงข้อผิดพลาด
   const errorMessage = await page.locator("#error").textContent();
   expect(errorMessage.trim()).toBe("Your username is invalid!");
});
test("TC03", async ({ page }) => {
  await page.getByLabel("Username").fill("student");
  await page.getByLabel("Password").fill("incorrectPassword ");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.locator("#error").textContent("Your password is invalid!");
  // รอให้ข้อความแสดงข้อผิดพลาดปรากฏ
  await page.waitForSelector("#error");

  // ตรวจสอบข้อความแสดงข้อผิดพลาด
  const errorMessage = await page.locator("#error").textContent();
  expect(errorMessage.trim()).toBe("Your password is invalid!");
});
