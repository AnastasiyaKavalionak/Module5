'use strict';

class PopUp {

    constructor () {

        this.title = element(by.css('.modal-title'));
        this.close = element(by.css('.fa.fa-times.close'));
        this.textfield = element(by.css('.modal-body input'));
        this.cansel = element(by.css('.modal-footer button:nth-of-type(1)'));
        this.save = element(by.css('.modal-footer button:nth-of-type(2)'));
    }
}

module.exports = PopUp;