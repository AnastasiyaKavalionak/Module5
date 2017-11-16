'use strict';

function openPage(url) {

    return browser.get(url);
}

function waitForVisibilityOf(element) {

    return browser.wait(EC.visibilityOf(element));
}

module.exports.openPage = openPage;
module.exports.wait = waitForVisibilityOf;