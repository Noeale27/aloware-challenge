const { Builder, By, Key, until } = require('selenium-webdriver'); // Import By, Key, and other necessary modules
const assert = require("assert");
const chrome = require('selenium-webdriver/chrome');

async function submitErrorMsg() {
  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().windowSize({ width: 1920, height: 1080 }))
    .build();
  await driver.get("https://aloware.com/");
  const submitButton = await driver.findElement(By.css('#hsForm_a40a6034-86be-4a4c-b515-fd313f8a81cb > div.hs_submit.hs-submit > div.actions > input'));
  await driver.executeScript("arguments[0].click();", submitButton);

  const requiredErrorMsg = "Please complete this required field.";

  const fullNameErrorMsgElement = await driver.findElement(By.css(".hs-firstname .hs-error-msg.hs-main-font-element"));
  const companyEmailErrorMsgElement = await driver.findElement(By.css(".hs_email .hs-error-msg.hs-main-font-element"));
  const phoneNumberErrorMsgElement = await driver.findElement(By.css(".hs_phone .hs-error-msg.hs-main-font-element"));

  assert.strictEqual(await fullNameErrorMsgElement.getText(), requiredErrorMsg);
  assert.strictEqual(await companyEmailErrorMsgElement.getText(), requiredErrorMsg);
  assert.strictEqual(await phoneNumberErrorMsgElement.getText(), requiredErrorMsg);


}
submitErrorMsg();