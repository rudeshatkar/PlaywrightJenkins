const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportName: "Playwright Automation Reports",
  pageTitle: "BOOKCART Applicqtion",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "114 ",
    },
    device: "Rudesh Kumar",
    platform: {
      name: "mac",
      version: "12.6.5",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "BOOKCART Application" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },
    ],
  },
}); 