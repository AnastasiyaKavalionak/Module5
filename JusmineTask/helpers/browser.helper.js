'use strict';

const EC = protractor.ExpectedConditions;

function openPage(url) {

    return browser.get(url);
}

function wait(element) {

    return browser.wait(EC.visibilityOf(element));
}

module.exports.openPage = openPage;
module.exports.wait = wait;