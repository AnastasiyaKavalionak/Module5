'use script';

class FilterNotes {

    constructor () {

        this['Name'] = element(by.css('.ellipsis'));
        this['On/Off'] = element(by.css('.settingsFilters-sort-toggle'));
        this['Edit'] = element.all(by.css('.settingsFilters-sort-toggle button')).get(0);
        this['Edit sieve'] = element.all(by.css('.settingsFilters-sort-toggle button')).get(1);
        this['Delete'] = element.all(by.css('.settingsFilters-sort-toggle button')).get(2);
    }
}

module.exports = FilterNotes;