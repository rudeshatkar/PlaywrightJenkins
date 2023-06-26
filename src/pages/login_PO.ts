import { expect, Page, request } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/playwrightWrapper";



export default class login_PO {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        loginLinkButton: "//span[text()='Login']",
        usernameTextBox: "//input[@data-placeholder='Username']",
        passwordTextBox: "//input[@data-placeholder='Password']",
        loginButton: "//mat-card-actions[@align='right']//button[1]",
        loginSuccess: "//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]//span[1]",
        loginFailed: "//mat-error[@class='mat-error ng-star-inserted']"
    }

    async navigateToLoginPage(url) {
    await this.base.goto(url);
    await expect(this.page).toHaveTitle("BookCart");
    }

    async clickLoginLink() {
    await this.page.click(this.Elements.loginLinkButton)
    }

    async enterUserName(username: string) {
    await this.page.fill(this.Elements.usernameTextBox, username);
    }

    async enterPassword(password) {
    await this.page.fill(this.Elements.passwordTextBox, password);
   }

    async clickLoginButton() {
    await this.page.click(this.Elements.loginButton)
    }

    async loginSuccess() {
    let text = await this.page.textContent(this.Elements.loginSuccess);
    console.log("User name: " + text)
    }

    async loginFailed() {
    await expect(this.page.locator(this.Elements.loginFailed)).toBeVisible()
    let error = await this.page.textContent(this.Elements.loginFailed);
    console.log("Error message : " + error)
   }
}
