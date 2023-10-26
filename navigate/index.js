import { chromium } from "playwright"


(async () => {
    const URLs = ['https://loginpage.com']
    const browser = await chromium.launch({
        headless: false,
        args: ['--proxy-server=http://localhost:8080','--ignore-certificate-errors']
      });
    const page = await browser.newPage();
    await page.goto(URLs[0]);  
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    const usernameField = await page.$('input[name="username"]');
    const passwordField = await page.$('input[name="password"]');;
  
    await usernameField.fill(username);
    await passwordField.fill(password);
    await passwordField.press('Enter');

    await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight); 
    });

    await page.waitForTimeout(3000);

    await browser.close();
})();