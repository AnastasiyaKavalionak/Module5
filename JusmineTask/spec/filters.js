'use strict';

const EC = protractor.ExpectedConditions;
const Filters = require('../pages/filters/filters');
const Login = require('../pages/login');
const PopUp = require('../pages/filters/popUp');
const EHelper = require('../helpers/element.helper');
const BHelper = require('../helpers/browser.helper');
const Reporter = require('../reporter/reporter');
const path = require('path');
let login = new Login();
let filters = new Filters();
let popUp = new PopUp();

Reporter.dir = './output';
Reporter.test = path.basename(__filename, '.js');
jasmine.getEnv().addReporter(Reporter);

beforeAll(() => {
    BHelper.openPage(login.url)
        .then(BHelper.wait(login.username))
        .then(EHelper.sendKeys(login.username, 'AnastasiyaTest'))
        .then(EHelper.sendKeys(login.password, 'Qwerty123'))
        .then(EHelper.click(login['Login button']))
        .then(BHelper.wait(login['Settings button']))
        .then(EHelper.click(login['Settings button']))
        .then(BHelper.wait(login['Filters button']))
        .then(EHelper.click(login['Filters button']))
        .then(browser.angularAppRoot('body'));
});

afterEach(() => {
    EHelper.deleteAllNotes(filters.Whitelist.Delete)
        .then(EHelper.deleteAllNotes(filters.Blacklist.Delete));
});

afterAll(() => {
    browser.sleep(100);
});

describe('filters page', () => {

    it('adding into whitelist', () => {

        BHelper.wait(filters['Whitelist Add']);
        EHelper.click(filters['Whitelist Add']);

        BHelper.wait(popUp.textfield);
        EHelper.sendKeys(popUp.textfield, 'bycaffca@gmail.com');
        EHelper.click(popUp.save);

        BHelper.wait(filters.Whitelist.Email.get(0));
        EHelper.isInList(filters.Whitelist.Email, 'bycaffca@gmail.com', true);
    });

    it('adding into blacklist', () => {

        BHelper.wait(filters['Blacklist Add']);
        EHelper.click(filters['Blacklist Add']);

        BHelper.wait(popUp.textfield);
        EHelper.sendKeys(popUp.textfield, 'bycaffca@inbox.ru');
        EHelper.click(popUp.save);

        BHelper.wait(filters.Blacklist.Email.get(0));
        EHelper.isInList(filters.Blacklist.Email, 'bycaffca@inbox.ru', true);
    });

    describe('whitelist: test of switch and delete buttons', () => {
        beforeEach(() => {
            BHelper.wait(filters['Whitelist Add'])
                .then(EHelper.click(filters['Whitelist Add']))
                .then(BHelper.wait(popUp.textfield))
                .then(EHelper.sendKeys(popUp.textfield, 'bycaffca@gmail.com'))
                .then(EHelper.click(popUp.save));
        });

        it('whitelist switch', () => {

            BHelper.wait(filters.Whitelist.Switch.first());
            EHelper.click(filters.Whitelist.Switch.first());

            BHelper.wait(filters.Blacklist.Email.first());
            EHelper.isInList(filters.Blacklist.Email, 'bycaffca@gmail.com', true);
        });

        it('whitelist delete', () => {

            BHelper.wait(filters.Whitelist.Delete.first());
            EHelper.click(filters.Whitelist.Delete.first());

            BHelper.wait(filters['Whitelist No Emails']);
            EHelper.isInList(filters.Whitelist.Email, 'bycaffca@gmail.com', false);
        });
    });

    describe('blacklist: test of switch and delete buttons', () => {
        beforeEach(() => {
            BHelper.wait(filters['Blacklist Add'])
                .then(EHelper.click(filters['Blacklist Add']))
                .then(BHelper.wait(popUp.textfield))
                .then(EHelper.sendKeys(popUp.textfield, 'bycaffca@inbox.ru'))
                .then(EHelper.click(popUp.save));
        });

        it('blacklist switch', () => {

            BHelper.wait(filters.Blacklist.Switch.first());
            EHelper.click(filters.Blacklist.Switch.first());

            BHelper.wait(filters.Whitelist.Email.first());
            EHelper.isInList(filters.Whitelist.Email, 'abycaffca@inbox.ru', true);
        });

        it('blacklist delete', () => {

            BHelper.wait(filters.Blacklist.Delete.first());
            EHelper.click(filters.Blacklist.Delete.first());

            BHelper.wait(filters['Blacklist No Emails']);
            EHelper.isInList(filters.Blacklist.Email, 'bycaffca@inbox.ru', false);
        });
    });
});