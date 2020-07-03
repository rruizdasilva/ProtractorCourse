import {After,Before, Status} from "cucumber";
import { browser } from "protractor";

Before(function () {
    // This hook will be executed before all scenarios
  });
  
Before({tags: "@CalcGroupOnly"}, function () {
    browser.manage().window().maximize();
});

After({tags: "@CalcGroupOnly"}, function () {
  console.log("After test");
});

After(async function (scenario) {
    if(scenario.result.status == Status.FAILED){
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "image/png")
    }
  });