import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";
import login_PO from "../../pages/login_PO";

let login: login_PO;

setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to the application', async function () {
  login = new login_PO(pageFixture.page)
  await pageFixture.page.goto(process.env.BASEURL)
});

Given('User click on login link', async function () {
  await login.clickLoginLink()
});

Given('User enter the username as {string}', async function (username) {
  await login.enterUserName(username)
});

Given('User enter the password as {string}', async function (password) {
  await login.enterPassword(password)
});

When('User click on Login button', async function () {
  await login.clickLoginButton()
});

Then('Login should be success', async function () {
  await login.loginSuccess()
});

Then('Login should fail', async function () {
  await login.loginFailed()
}); 