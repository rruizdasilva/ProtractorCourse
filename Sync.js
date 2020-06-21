describe('Protractor Synchronization steps', function () {

    it('Open NonAngular js website Sync', function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get("https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_ajax_ajaxcomplete");
        browser.switchTo().frame(element(by.id('iframeResult')).getWebElement());
        element(by.css('button')).click();
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.invisibilityOf(element(by.css("img[src*='gif']"))), 8000);
        element(by.id("txt")).getText().then(function (text) {
            console.log(text);
        })
    })
})
