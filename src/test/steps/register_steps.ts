import { Given, Then, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import login_PO from "../../pages/login_PO";
import register_PO from "../../pages/register_PO";
import * as data from "../../helper/test-data/registerUser.json";

let login : login_PO;
let register : register_PO;

Given('User Navigates to register page', async function () {
    register = new register_PO(pageFixture.page)
    login = new login_PO(pageFixture.page)
    await pageFixture.page.goto(process.env.BASEURL)
    await login.clickLoginLink()
    await register.clickRegisterLink()
  });

  When('User creates new user', async function () {
    const userName = data.userName + Date.now().toString()
    await register.fillRegistrationForm(data.firstName, data.lastName, userName, data.password, data.confirmPassword, "m")
    await register.checkResponse(200)
  });

  Then('User confirms registration successful', async function () {
     await register.checkURL('https://bookcart.azurewebsites.net/login')
  });
