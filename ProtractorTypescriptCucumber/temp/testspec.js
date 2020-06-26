"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("./pageObjects/calculator");
const angularHomePage_1 = require("./pageObjects/angularHomePage");
describe('Protractor Course', () => {
    it('Perform calculation', () => __awaiter(void 0, void 0, void 0, function* () {
        let calc = new calculator_1.Calculator();
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        yield calc.firstEditBox.sendKeys("3");
        yield calc.secondEditBox.sendKeys("5");
        yield calc.go.click();
        calc.getResult.getText().then(function (text) {
            console.log(text);
        });
        // element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
    }));
    it('Introduce Page Object', () => __awaiter(void 0, void 0, void 0, function* () {
        let ah = new angularHomePage_1.angularHomePage();
        protractor_1.browser.get('https://angularjs.org');
        yield ah.angularLink.click();
        yield ah.search.sendKeys("hello");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUVuQyx5REFBc0Q7QUFDdEQsbUVBQWdFO0FBRWhFLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFFLEVBQUU7SUFDOUIsRUFBRSxDQUFDLHFCQUFxQixFQUFFLEdBQU8sRUFBRTtRQUUvQixJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUc1QixvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQ2pFLHdEQUF3RDtRQUNoRCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtZQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBR1YsZ0ZBQWdGO0lBRTVFLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsdUJBQXVCLEVBQUUsR0FBTyxFQUFFO1FBQ2pDLElBQUksRUFBRSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO1FBRS9CLG9CQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQyxDQUFBIn0=