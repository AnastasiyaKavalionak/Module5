'use strict';

class ListNotes {

    constructor (id) {

        this['Email'] = element.all(by.css(`#${id} .blocklist-email-value`));
        this['Switch'] = element.all(by.css(`#${id} button[data-original-title="Switch"]`));
        this['Delete'] = element.all(by.css(`#${id} button[data-original-title="Delete"]`));
    }
}

module.exports = ListNotes;