import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";
import addToCart_PO from "../../pages/addToCart_PO";

let cart : addToCart_PO;

setDefaultTimeout(60 * 1000 * 2)

Given('User search for a {string}', async function (book) {
    cart = new addToCart_PO(pageFixture.page)
    await cart.searchABook(book)
});

When('User add the book to the cart', async function () {
    await cart.clickAddToCart()
});

Then('The cart badge should get updated', async function () {
    await cart.verifyBookAddedToCart()
})