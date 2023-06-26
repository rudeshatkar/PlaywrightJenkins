import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/playwrightWrapper";


export default class register_PO {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        registerLink : "//span[text()='Register']",
        firstName : "//input[@data-placeholder='First name']",
        lastName : "input[formcontrolname='lastname']",
        userName : "input[data-placeholder='User Name']",
        password : "input[data-placeholder='Password']",
        confirmPass : "input[data-placeholder='Confirm Password']",
        genderMaleButton : "(//span[@class='mat-radio-outer-circle'])[1]",
        genderFemaleButton: "(//span[@class='mat-radio-outer-circle'])[2]",
        confirmRegistration : "//span[text()='Register']",
        loginButton : "(//span[@class='mat-button-wrapper'])[3]"
    }

    async clickRegisterLink(){
        await this.page.click(this.Elements.registerLink)
    }

    async fillRegistrationForm(firstName:string, lastName:string,userName:string,
        password:string,confirmPass:string,gender:string) {
        await this.page.type(this.Elements.firstName, firstName)
        await this.page.type(this.Elements.lastName, lastName)
        await this.enterUsername(userName)
        await this.page.type(this.Elements.password, password)
        await this.page.type(this.Elements.confirmPass, confirmPass)
        if (gender == "m") {
            await this.page.click(this.Elements.genderMaleButton);
            await expect(this.page.locator(this.Elements.genderMaleButton)).toBeChecked();
        } else {
            await this.page.click(this.Elements.genderFemaleButton);
            await expect(this.page.locator(this.Elements.genderFemaleButton)).toBeChecked();
        }
        const regBtn = this.page.locator(this.Elements.confirmRegistration);
        await regBtn.click()
    }

    async enterUsername(userName: string) {
        await this.page.type(this.Elements.userName, userName);
        const [response] = await Promise.all([
            this.page.waitForResponse(res => {
                return res.status() == 200
                    &&
                    res.url() == `https://bookcart.azurewebsites.net/api/user/validateUserName/${userName}`
            })
        ]);
        await response.finished();
    }

    async checkURL(url){
        await expect(this.page).toHaveURL(url)
    }

    async checkResponse(code) {
        const [response] = await Promise.all([
            this.page.waitForResponse(res => {
                return res.status() == code
            })
        ]);
        await response.finished();
    }
}