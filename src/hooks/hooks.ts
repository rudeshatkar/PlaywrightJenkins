import { BeforeAll, AfterAll, Before, After, AfterStep, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";

const fs = require("fs-extra")

let browser:Browser
let context: BrowserContext

BeforeAll(async function () {
    getEnv()
    browser = await invokeBrowser()
})
Before(async function ({pickle}) {
    const scenarioName = pickle.name + pickle.id
    context = await browser.newContext({
        recordVideo: {
            dir: "test-results/video"
        },
    })
    const page = await browser.newPage()
    pageFixture.page = page
})

// AfterStep(async function ({ pickle, result }) {
//     const img = await pageFixture.page.screenshot({ path: `./test-result/screenshots/"${pickle.name}.png`, type:"png"})
//         this.attach(img, "image/png")
// })

After(async function ({ pickle, result }) {

    let videoPath: String
    let img: Buffer
    console.log(result?.status)
    // attach screenshot //
    if (result?.status == Status.FAILED) {
        img = await pageFixture.page.screenshot({ path: `./test-results/screenshots/"${pickle.name}.png`, type:"png"})
        videoPath = await pageFixture.page.video().path()
        await this.attach(img, "image/png")
        await this.attach(fs.readFileSync(videoPath), "video/webm")
    }

    await pageFixture.page.close()
    await context.close()

    if (result?.status == Status.FAILED) {
        await this.attach(img, "image/png")
        await this.attach(fs.readFileSync(videoPath), "video/webm")
    }
   
})

AfterAll(async function () {
    await browser.close()
})