import {test as setup, expect, Page} from '@playwright/test'
import { LoginPage } from './pages/login.page'
let authPath = 'playwright/.auth/user.json'

setup('authenticacion y cookies setup', async({page})=>{
    let loginPage: LoginPage;
    loginPage = new LoginPage(page);
    await loginPage.navigateTo('https://wwww.saucedemo.com/');
    await loginPage.login(process.env.TEST_USER, process.env.TEST_PASSWORD);
    await page.context().storageState({path: authPath});
});