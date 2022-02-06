const {test, expect} = require('@playwright/test');

test.describe('Main page has all mandatory elements', () => {
  test('Navigation menu', async ({ page }) => {
    await page.goto('https://auth0.com');
    await expect(page.locator('nav[role="navigation"]>a>svg')).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const list = page.locator('ul[role="menubar"] > li > div > span');
    await expect(list).toHaveCount(4);
    const product = page.locator('ul[role="menubar"]>li>div>span').nth(0)
    await expect(product).toContainText('Product')
    const solutions = page.locator('ul[role="menubar"]>li>div>span').nth(1)
    await expect(solutions).toContainText('Solutions')
    const docsAndResorces = page.locator('ul[role="menubar"]>li>div>span').nth(2)
    await expect(docsAndResorces).toContainText('Docs & Resources')
    const company = page.locator('ul[role="menubar"]>li>div>span').nth(3)
    await expect(company).toContainText('Company')
    const pricing = page.locator('ul[role="menubar"]>li>a>span')
    await expect(pricing).toContainText('Pricing')
    const signupButton = page.locator('ul[role="menubar"]>a[href="/signup?place=header&type=button&text=sign%20up"]')
    await expect(signupButton).toHaveText('Sign up')
    const contactSales = page.locator('ul[role="menubar"]>a[href="/contact-us?place=header&type=button&text=contact%20sales"]')
    await expect(contactSales).toHaveText('Contact sales')
    const loginButton = page.locator('header>div>div>a[href="/auth/login"]')
    await expect(loginButton).toContainText('Login')
    const language = page.locator('header div>span>span>span[aria-labelledby="language-selector"]')
    await expect(language).toContainText('English')
  })

})