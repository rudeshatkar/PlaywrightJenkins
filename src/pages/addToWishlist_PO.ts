import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/playwrightWrapper";


export default class addToWishlist_PO {
    
    constructor(private page: Page) {
       
    }

    private Elements = {
        addToWishlist_btn_selected: "span.material-icons.ng-star-inserted.favourite-selected",
        addToWishlist_btn_Unselected: "span.material-icons.favourite-unselected",
        wishlistCount: "#mat-badge-content-1"
    }

    async clickAddToWishlist() {

        if (await this.page.isVisible(this.Elements.addToWishlist_btn_Unselected)){
            await this.page.click(this.Elements.addToWishlist_btn_Unselected)
            await this.page.waitForTimeout(2000)
        }
        
    }
    
    async verifyBookAddedToWishlist() {
        let count = await this.page.textContent(this.Elements.wishlistCount)
        expect(Number(count)).toBeGreaterThan(0)
    }

    async clickRemoveFromWishlist() {
        if (await this.page.isVisible(this.Elements.addToWishlist_btn_selected)){
            await this.page.click(this.Elements.addToWishlist_btn_selected)
            await this.page.waitForTimeout(2000)
        }
          
    }
}