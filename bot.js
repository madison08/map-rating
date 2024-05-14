import puppeteer from "puppeteer-core";
import dotenv from "dotenv";
import { getWebSocketUrl, delay } from "./utils/function.js";

dotenv.config();

(async () => {
  const browser = await puppeteer
    .connect({
      browserWSEndpoint: await getWebSocketUrl(),
    })
    .then((browser) => {
      console.log("Browser opened");
      return browser;
    });

  console.log("Browser opened");
  const page = await browser.newPage();

  await page.goto("https://www.google.com");

  const emailInput = await page.waitForSelector("#APjFqb");

  await page.type("#APjFqb", "Elixir");

  const searchButton = await page.waitForSelector(".gNO89b");

  await searchButton.click();

  //-------------------------------------//
  //--------- Gmail login process from maps ---------//
  //-------------------------------------//

  // const connexionButton = await page.waitForSelector("#gb_70");

  // const href = await page.evaluate(() =>
  //   document.querySelector("#gb_70").getAttribute("href")
  // );

  // await page.goto(href);

  // const emailInput = await page.waitForSelector("#identifierId");

  // await page.type("#identifierId", process.env.EMAIL);

  // const button = await page.waitForSelector(
  //   ".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ"
  // );

  // if (button) {
  //   console.log("button found");
  // }
  // await button.click();

  // const passwordInputSelector = ".whsOnd.zHQkBf";

  // await Promise.all([
  //   button.click(),
  //   page.waitForNavigation({ waitUntil: "networkidle0" }),
  // ]);

  // // Wait for the password input to be visible
  // await page.waitForSelector(passwordInputSelector, { visible: true });

  // // Type the password
  // await page.type(passwordInputSelector, process.env.PASSWORD);

  // const nextButtonSelector = ".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ";

  // // Wait for the next button to be visible
  // await page.waitForSelector(nextButtonSelector, { visible: true });

  // // Click the next button
  // await page.click(nextButtonSelector);

  await delay(50000);

  await browser.close();
})();
