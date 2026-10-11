import {test, expect} from '@playwright/test';

test('Locators',async({page})=>{
    await page.goto("https://www.demoblaze.com/");

    //click on login button - property
    await page.click('id=login2');

    //provide username - CSS
    await page.fill('#loginusername', 'Lakshmi');

    //provide password - CSS
    await page.fill("input[id='loginpassword']",'test@3458');

    //Click on login button - XPath
    await page.click("//button[normalize-space()='Log in']");

    //Verify logout link presence - XPath
    const logoutlink= await page.locator("//a[normalize-space()='Log out']");

    await expect(logoutlink).toBeVisible();
})