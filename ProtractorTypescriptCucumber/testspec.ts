import {browser} from "protractor";
import {element, by} from "protractor";
import { Calculator } from "./pageObjects/calculator";
import { angularHomePage } from "./pageObjects/angularHomePage";

describe('Protractor Course', ()=> {
    it('Perform calculation', async()=> {
        
        let calc = new Calculator();
        
        browser.get('http://juliemr.github.io/protractor-demo/');
//repeater ,  chain locators, And css for identical tags
        await calc.firstEditBox.sendKeys("3");
        await calc.secondEditBox.sendKeys("5");
        await calc.go.click();
        calc.getResult.getText().then(function (text) {

            console.log(text);
        })


// element(by.model("operator")).element(by.css("option:nth-child(4)")).click();

    })

    it('Introduce Page Object', async()=> {
        let ah = new angularHomePage();
        
        browser.get('https://angularjs.org');
        await ah.angularLink.click();
        await ah.search.sendKeys("hello");
    })

})