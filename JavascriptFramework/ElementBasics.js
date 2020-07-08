describe('Protractor element demo', function () {
    var calc = require("./CalcPage");
    var d = require("./data.js");
    var using = require('jasmine-data-provider');

    beforeEach(function () {
        calc.getURL("https://juliemr.github.io/protractor-demo/");
    });


    using(d.dataDriven, function (data, description) {
        it('Testing calculator function' + description, function () {
            calc.firstinput.sendKeys(data.firstinput);
            calc.secondinput.sendKeys(data.secondinput);
            calc.gobutton.click().then(function () {
                browser.sleep(1000)
            })

            // Jasmine framework resolves the promise by itself
            expect(calc.result.getText()).toBe(data.result);

            /*var promise = element(by.css("h2[class='ng-binding")).getText();
            promise.then(function (text) {
                console.log(text)
            }, function (text) {
                console.log(text)
            });*/
        })
    });

    afterEach(function () {
        console.log("Test is completed!");
    });
})
