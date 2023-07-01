import { When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";
import addToWishlist_PO from "../../pages/addToWishlist_PO";

let wishlist : addToWishlist_PO;

setDefaultTimeout(60 * 1000 * 2)

When('User add the book to the wishlist', async function () {
    wishlist = new addToWishlist_PO(pageFixture.page)
    await wishlist.clickAddToWishlist()
});

Then('The wishlist badge should get updated', async function () {
    await wishlist.verifyBookAddedToWishlist()
});

When('User remove the book from the wishlist',async function () {
    await wishlist.clickRemoveFromWishlist()
})
    

