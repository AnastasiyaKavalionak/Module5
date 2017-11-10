'use script';

class FilterNotes {

    constructor () {

        this['Name'] = element(by.css('.ellipsis'));
        this['On/Off'] = element(by.css('.settingsFilters-sort-toggle'));
        this['Edit'] = element(by.css('.as-sortable-item-handle button:nth-of-type(1)'));
        this['Edit sieve'] = element(by.css('.as-sortable-item-handle button:nth-of-type(2)'));
        this['Delete'] = element(by.css('.as-sortable-item-handle button:nth-of-type(3)'));
    }
}

module.exports = FilterNotes;
