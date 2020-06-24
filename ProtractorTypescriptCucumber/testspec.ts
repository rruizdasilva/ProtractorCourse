import {browser} from "protractor";
import {element, by} from "protractor";

describe('Chain locators demo', ()=> {
    it('Open Angular js website', async()=> {
        browser.get('http://juliemr.github.io/protractor-demo/');
//repeater ,  chain locators, And css for identical tags
        await element(by.model("first")).sendKeys("3");
        await element(by.model("second")).sendKeys("5");

        await element(by.id("gobutton")).click();

        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (text) {

            console.log(text);
        })


// element(by.model("operator")).element(by.css("option:nth-child(4)")).click();


    })

})