var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['ElementBasics.js'],
    onPrepare: function() {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );
        console.log("On prepare")
    },
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },
    suites:
        {
            // smoke: ['file.js', 'file2.js'],
            regression: 'ElementBasics.js'
        }
};