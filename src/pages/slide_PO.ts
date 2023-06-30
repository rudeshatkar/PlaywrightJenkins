import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/playwrightWrapper";

export default class slide_PO {
    
    constructor(private page: Page) {
       
    }

    private Elements = {
       slider: "mat-slider[role='slider']",
       range_Value: ".mat-slider-thumb-label span",
       bookCount: "img[alt='Book cover image']",
       bookPrice: ".mat-card-content p"
    }

    async slideTheRange(range){
        // await this.page.isVisible(this.Elements.slider)
        // await this.page.click(this.Elements.slider)
        // let range_val = await this.page.textContent(this.Elements.range_Value)
        let range_val1 = await this.page.textContent(this.Elements.range_Value)
        console.log(range_val1)
        await this.page.click(this.Elements.slider, { force : true })
        for ( let i = 505; i >= 111; i--){
            await this.page.keyboard.press('Meta+ArrowLeft')
            console.log(i) 
        }
        await this.page.waitForLoadState() 
        await this.page.isVisible(this.Elements.bookCount)
        let price = await this.page.textContent(this.Elements.bookPrice)
        console.log(price)
    }
}