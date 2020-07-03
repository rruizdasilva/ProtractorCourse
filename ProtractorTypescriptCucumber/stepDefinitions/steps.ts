import { Given, When, Then } from "cucumber"
import { Calculator } from "../pageObjects/calculator";
import { browser } from "protractor";
import chai from "chai";

let calc = new Calculator();
var expect = chai.expect;


Given('I will navigate to Calc site', async()=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.get('http://juliemr.github.io/protractor-demo/');
});

When('I add two number {string} and {string}', async(string, string2)=> {
    // Write code here that turns the phrase above into concrete actions
    //repeater ,  chain locators, And css for identical tags
   
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
    await calc.go.click();
  });


Then('the output displayed should be {string}', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    await calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    })
});