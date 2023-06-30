import { When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";
import slide_PO from "../../pages/slide_PO";

let slide: slide_PO;

setDefaultTimeout(60 * 1000)

When('User set the slider range to {string}', async function (range) {
    slide = new slide_PO(pageFixture.page)
    await slide.slideTheRange(range)

});
Then('The range should be applied', async function () {
    
});