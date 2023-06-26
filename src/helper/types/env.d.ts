export { }

declare global {
    namespace NodeJS {
        interface ENV {
             BROWSER: "chrome" | "firefox" | "webkit",
             ENV: "staging" | "prod" | "qa",
             BASEURL: string,
             HEAD: "true" | "flase"
        }
    }
}