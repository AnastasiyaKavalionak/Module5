'use strict';

exports.config = {
    directConnect: true,
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--disable-notifications', '--disable-infobars']
        },
        platform: "Windows 10",
        maxDuration: 10800
    },
    specs: ['./spec/*.js'],

    onPrepare: function () {
        //noinspection JSAnnotator
        global.EC = protractor.ExpectedConditions;
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};