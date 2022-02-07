const {test, expect} = require('@playwright/test');

test.describe('Signup', () => {
  test('User be able to create account', async ({ page }) => {
    await page.goto('https://auth0.com');
    await page.locator('ul[role="menubar"]>a[href="/signup?place=header&type=button&text=sign%20up"]').click()
    await expect(page).toHaveURL('https://auth0.com/signup?place=header&type=button&text=sign%20up');
   
    await expect(page.locator('section>div>div>h2:has-text("Sign up")')).toBeVisible()
   
    await page.fill('input[placeholder="yourname@email.com"]', 'newus@mail.com')
    await page.screenshot({
      path: `playAdd/screenshots/emailData.png` 
    });
    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState('domcontentloaded');
    expect(page.url()).toContain("https://auth0.auth0.com/u/signup");
    
})

})