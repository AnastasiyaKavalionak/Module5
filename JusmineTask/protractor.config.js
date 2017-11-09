'use strict';

exports.config = {
    directConnect: true,
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
        platform: "Windows 10",
        maxDuration: 10800
    },
    specs: ['./spec/*.js'],

    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 50000
    }
};