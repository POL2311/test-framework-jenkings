import {test, expect, Page, Locator} from '@playwright/test'
import { BasePage } from './base.page'
export class LoginPage extends BasePage{

    private readonly usernameTXT: Locator
    private readonly passwordTXT: Locator 
    private readonly buttonTXT: Locator
    private readonly messageError: Locator
    constructor(page: Page){
        super(page);
        this.usernameTXT = page.getByRole('textbox',{name: 'Username'})
        this.passwordTXT = page.getByRole('textbox',{name: 'Password'})
        this.buttonTXT = page.getByRole('button',{name: 'Login'})
    }
    async fillCredentials(username: string, password: string): Promise<void>{
        await this.usernameTXT.fill(username)
        await this.passwordTXT.fill(password)
    }
    async submitLogin(): Promise<void>{
        await this.buttonTXT.click({force: true});
    }
    async login(username: string, password: string): Promise<void>{
        await this.fillCredentials(username, password);
        await this.submitLogin();
    }

}