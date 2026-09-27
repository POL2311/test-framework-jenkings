import { test, expect,Page } from '@playwright/test';
import { LoginPage } from './pages/login.page';

test.describe('authentication with credencials', () => {
  let loginPage: LoginPage;
  test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.navigateTo('https://www.saucedemo.com/')
  });
  test('login with credentials', async({page})=>{
    await loginPage.login(process.env.TEST_USER,process.env.TEST_PASSWORD);
    await page.screenshot({path: 'login.png',fullPage: true})
  });
});