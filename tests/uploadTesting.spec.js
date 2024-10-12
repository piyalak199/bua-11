const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("https://practice-automation.com/file-upload/");
});

// Define file upload paths
const dataUploadFile = {
  file: {
    text: "./tests/fileUpload/TC-01.txt",
    pdf: "./tests/fileUpload/TC-02.pdf",
    docx: "./tests/fileUpload/TC-03.docx",
    jpeg: "./tests/fileUpload/TC-04.jpeg",
    jpg: "./tests/fileUpload/TC-05.jpg",
    png: "./tests/fileUpload/TC-06.png",
    gif: "./tests/fileUpload/TC-07.gif",
    max: "./tests/fileUpload/TC-09.pdf",
    other: "./tests/fileUpload/TC-10.xlsx"
  }
};

test("TC01 - Upload text file", async ({ page }) => {
  await page.locator("#file-upload").setInputFiles(dataUploadFile.file.text);
  await page.locator("#upload-btn").click();
  await expect(page.locator(".wpcf7-response-output")).toHaveText(
    "Thank you for your message. It has been sent."
  );
});

test("TC02 - Upload PDF file", async ({ page }) => {
  await page.locator("#file-upload").setInputFiles(dataUploadFile.file.pdf);
  await page.locator("#upload-btn").click();
  await expect(page.locator(".wpcf7-response-output")).toHaveText(
    "Thank you for your message. It has been sent."
  );
});

test("TC03 - Upload DOCX file", async ({ page }) => {
  await page.locator("#file-upload").setInputFiles(dataUploadFile.file.docx);
  await page.locator("#upload-btn").click();
  await expect(page.locator(".wpcf7-response-output")).toHaveText(
    "Thank you for your message. It has been sent."
  );
});

test("TC04 - Upload JPEG file", async ({ page }) => {
  await page.locator("#file-upload").setInputFiles(dataUploadFile.file.jpeg);
  await page.locator("#upload-btn").click();
  await expect(page.locator(".wpcf7-response-output")).toHaveText(
    "Thank you for your message. It has been sent."
  );
});

test("TC05 - Upload JPG file", async ({ page }) => {
  await page.locator("#file-upload").setInputFiles(dataUploadFile.file.jpg);
  await page.locator("#upload-btn").click();
  await expect(page.locator(".wpcf7-response-output")).toHaveText(
    "Thank you for your message. It has been sent."
  );
});

test("TC06 - Upload PNG file", async ({ page }) => {
  await page.locator("#file-upload").setInputFiles(dataUploadFile.file.png);
  await page.locator("#upload-btn").click();
  await expect(page.locator(".wpcf7-response-output")).toHaveText(
    "Thank you for your message. It has been sent."
  );
});

test("TC07 - Upload GIF file", async ({ page }) => {
  await page.locator("#file-upload").setInputFiles(dataUploadFile.file.gif);
  await page.locator("#upload-btn").click();
  await expect(page.locator(".wpcf7-response-output")).toHaveText(
    "Thank you for your message. It has been sent."
  );
});

test("TC08 - Upload file blank", async ({ page }) => {
  await page.locator("#upload-btn").click();
  await expect(page.locator(".wpcf7-response-output")).toHaveText(
    "One or more fields have an error. Please check and try again."
  );
});

test("TC09 - Upload file too big", async ({ page }) => {
  await page.locator("#file-upload").setInputFiles(dataUploadFile.file.max);
  await expect(page.locator(".wpcf7-not-valid-tip")).toHaveText(
    "Uploaded file is too big."
  );
});

test("TC10 - Upload an unsupported file type", async ({ page }) => {
  await page.locator("#file-upload").setInputFiles(dataUploadFile.file.other);
  await page.locator("#upload-btn").click();
  await expect(page.locator(".wpcf7-not-valid-tip")).toHaveText(
    "You are not allowed to upload files of this type."
  );
  await expect(page.locator(".wpcf7-response-output")).toHaveText(
    "One or more fields have an error. Please check and try again."
  );
});
