import { test, expect } from "@playwright/test";

/**
 * @param {TestInfo} testInfo Test info
 * @param {Page} page Page
 * @returns {Promise<void>}
 */
export async function screenshot(testInfo, page) {
    const screenshot = await page.screenshot();
    await testInfo.attach("screenshot", {
        body: screenshot,
        contentType: "image/png"
    });
}

/**
 * @param {Page} page
 */
export async function login(page) {
    // Login
    await page.getByPlaceholder("Username").click();
    await page.getByPlaceholder("Username").fill("admin");
    await page.getByPlaceholder("Username").press("Tab");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByLabel("Remember me").check();
    await page.getByRole("button", { name: "Login" }).click();
    await page.isVisible("text=Add New Monitor");
}
