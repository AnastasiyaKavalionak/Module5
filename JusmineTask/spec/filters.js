'use strict';

const EC = protractor.ExpectedConditions;
const Filters = require('../pages/filters/filters');
let filters = new Filters();

describe ('filters page', () => {

    beforeAll(() => {
        browser.get('https://mail.protonmail.com/login');

        browser.wait(EC.visibilityOf(element(by.css('#username'))));
        element(by.css('#username')).sendKeys('AnastasiyaTest');
        element(by.css('#password')).sendKeys('Qwerty123');
        element(by.css('#login_btn')).click();

        browser.wait(EC.visibilityOf(element(by.css('#tour-settings'))));
        element(by.css('#tour-settings')).click();

        browser.wait(EC.visibilityOf(element(by.css('a[data-state="filters"'))));
        element(by.css('a[data-state="filters"]')).click();
    });

    it ('adding into whitelist', () => {

        browser.wait(EC.visibilityOf(element(by.css('#whitelist .pm_button'))));
        element(by.css('#whitelist .pm_button')).click();

        browser.wait(EC.visibilityOf(element(by.css('#emailAddress'))));
        element(by.css('#emailAddress')).sendKeys('bycaffca@gmail.com');
        element.all(by.css('.modal-footer button')).get(1).click();

        browser.wait(EC.visibilityOf(element(by.css('#whitelist .blocklist-email-value'))));
        expect(element.all(by.css('#whitelist .blocklist-email-value')).first().getText()).toEqual('bycaffca@gmail.com');
    });

    it ('adding into blacklist', () => {

        browser.wait(EC.visibilityOf(element(by.css('#blacklist .pm_button'))));
        element(by.css('#blacklist .pm_button')).click();

        browser.wait(EC.visibilityOf(element(by.css('#emailAddress'))));
        element(by.css('#emailAddress')).sendKeys('bycaffca@inbox.com');
        element.all(by.css('.modal-footer button')).get(1).click();

        browser.wait(EC.visibilityOf(element(by.css('#blacklist .blocklist-email-value'))));
        expect(element.all(by.css('#blacklist .blocklist-email-value')).first().getText()).toEqual('bycaffca@inbox.com');
    });

    it ('whitelist switch', () => {

        browser.wait(EC.visibilityOf(element(by.css('#whitelist button[data-original-title="Switch"]'))));
        let email = element.all(by.css('#whitelist .blocklist-email-value')).first().getText().then((res) => res);
        element.all(by.css('#whitelist button[data-original-title="Switch"]')).first().click();

        browser.wait(EC.visibilityOf(element(by.css('#blacklist .blocklist-email-value'))));
        expect(element.all(by.css('#blacklist .blocklist-email-value')).last().getText()).toEqual(email);
    });

    it ('blacklist switch', () => {

        browser.wait(EC.visibilityOf(element(by.css('#blacklist button[data-original-title="Switch"]'))));
        let email = element.all(by.css('#blacklist .blocklist-email-value')).first().getText().then((res) => res);
        element.all(by.css('#blacklist button[data-original-title="Switch"]')).first().click();

        browser.wait(EC.visibilityOf(element(by.css('#whitelist .blocklist-email-value'))));
        expect(element.all(by.css('#whitelist .blocklist-email-value')).last().getText()).toEqual(email);
    });

    it ('adding filters', () => {

        browser.wait(EC.visibilityOf(element.all(by.css('.settingsFilters-actions-buttons')).get(0)));
        element.all(by.css('.settingsFilters-actions-buttons')).get(0).click();

        browser.wait(EC.visibilityOf(element(by.css('#filterName'))));
        element(by.css('#filterName')).sendKeys('filter1');
        element(by.css('.filter-modal-condition-settings select')).click();
        element(by.css('option[label="the sender"]')).click();
        browser.wait(EC.visibilityOf(element(by.css('#autocomplete'))));
        element(by.css('#autocomplete')).sendKeys('bycaffca');
        element.all(by.css('.customCheckbox-input')).get(1).click();
        browser.wait(EC.visibilityOf(element(by.css('.customRadio-input'))));
        element.all(by.css('.customRadio-input')).get(1).click();
        element.all(by.css('modal-footer button')).get(1).click();

        browser.wait(EC.visibilityOf(element(by.css('ellipsis'))));
        expect(element(by.css('ellipsis')).getText()).toEqual('filter1');
    })
});