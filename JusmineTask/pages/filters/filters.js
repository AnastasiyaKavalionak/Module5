'use strict';

const ListNotes = require('./listNotes');
const FilterNotes = require('./filterNotes');

class Filters {

    constructor () {

        this.url = 'https://mail.protonmail.com/filters';

        this['Filter Add'] = element.all(by.css('.settingsFilters-actions-buttons')).get(0);
        this['Add Sieve Filter'] = element.all(by.css('.settingsFilters-actions-buttons')).get(1);
        this['Custom Filters'] = new FilterNotes();
        this['No Filters'] = element.all(by.css('.setting p')).get(2);
        this['No More Filters'] = element.all(by.css('.setting p')).get(1);

        this['Learn More'] = element(by.css('a[href*="knowledge-base"]'));
        this['Search'] = element(by.css('.search'));

        this['Whitelist Add'] = element(by.css('#whitelist .pm_button'));
        this['Whitelist'] = new ListNotes('whitelist');
        this['Whitelist No Emails'] = element(by.css('#whitelist p'));

        this['Blacklist Add'] = element(by.css('#blacklist .pm_button'));
        this['Blacklist'] = new ListNotes('blacklist');
        this['Blacklist No Emails'] = element(by.css('#blacklist p'));
    }
}

module.exports = Filters;