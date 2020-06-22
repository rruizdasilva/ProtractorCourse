describe('Protractor element demo', function () {
    it('Locators', function () {
        browser.get("https://juliemr.github.io/protractor-demo/")
        element(by.model("first")).sendKeys("3")
        element(by.model("second")).sendKeys("5")
        element(by.id("gobutton")).click().then(function () {
            browser.sleep(1000)
        })

        // Jasmine framework resolves the promise by itself
        expect(element(by.css("h2[class='ng-binding")).getText()).toBe("7")

        /*var promise = element(by.css("h2[class='ng-binding")).getText();
        promise.then(function (text) {
            console.log(text)
        }, function (text) {
            console.log(text)
        });*/
    })
})
