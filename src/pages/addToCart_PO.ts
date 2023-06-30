import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/playwrightWrapper";


export default class addToCart_PO {
    
    constructor(private page: Page) {
       
    }

    private Elements = {
       enterBookName: "input[role='combobox']",
       clickBookSreached: "mat-option[role='option']",
       addToCart_btn: "(//button[@color='primary']//span)[1]",
       cartCount: "id=mat-badge-content-0",
    }

    async searchABook(book){
        await this.page.type(this.Elements.enterBookName, book)
        await this.page.waitForTimeout(2000)
        await this.page.click(this.Elements.clickBookSreached)
    }

    async clickAddToCart() {
        await expect(this.page.locator(this.Elements.addToCart_btn)).toBeVisible()
        await this.page.click(this.Elements.addToCart_btn)
    }
    

    async verifyBookAddedToCart() {
        let badgeCount = await this.page.textContent(this.Elements.cartCount)
        expect(Number(badgeCount)).toBeGreaterThanOrEqual(1)
    }
}