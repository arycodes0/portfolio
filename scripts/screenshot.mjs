import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto("http://localhost:3000");
await page.waitForTimeout(1000);
await page.screenshot({ path: "/tmp/portfolio-hero.png" });

await page.locator("#proyectos").scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await page.screenshot({ path: "/tmp/portfolio-projects.png" });

await page.locator("#sobre-mi").scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await page.screenshot({ path: "/tmp/portfolio-about.png" });

await page.locator("#contacto").scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await page.screenshot({ path: "/tmp/portfolio-contact.png" });

console.log("Console errors:", errors);
await browser.close();
