'use strict';

class Login {

    constructor () {

        this.url = 'https://mail.protonmail.com/login';

        this.username = element(by.css('#username'));
        this.password = element(by.css('#password'));
        this['Login button'] = element(by.css('#login_btn'));

        this['Settings button'] = element(by.css('#tour-settings'));

        this['Filters button'] = element(by.css('a[data-state="filters"]'));
    }
}

module.exports = Login;