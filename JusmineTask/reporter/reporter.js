'use strict';

const fs = require('fs');
var shell = require('shelljs');
let path;
let idGenerator = 1;
let currentSpec = [];

const myReporter = {

    dir: "",

    test: "",

    jasmineStarted: function(suiteInfo) {
        return new Promise((resolve, reject)=> {
            let date = new Date().toLocaleString("en").replace(/[/:]/g, '-').replace(/[\s]/g, '').replace(/[,]/g, '--');
            path = this.dir + '/' + this.test + '/';
            if (!fs.existsSync(path)){
                shell.mkdir('-p', path);
            }
            path += date + '.html';
            if (!fs.existsSync(path)) {
                fs.writeFileSync(path, '<!DOCTYPE html>\n', 'utf8');
                fs.appendFileSync(path, '<html>\n', 'utf8');
                fs.appendFileSync(path, '<head>\n', 'utf8');
                fs.appendFileSync(path, '<title>' + this.test + '</title>\n', 'utf8');
                fs.appendFileSync(path, '<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">\n', 'utf8');
                fs.appendFileSync(path, '<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">\n', 'utf8');
                fs.appendFileSync(path, '<script src="https://code.jquery.com/jquery.min.js"></script>\n', 'utf8');
                fs.appendFileSync(path, '<script src="//netdna.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>\n', 'utf8');
                fs.appendFileSync(path, '</head>\n', 'utf8');
                fs.appendFileSync(path, '<body>\n', 'utf8');
            }
        });
    },

    suiteStarted: function(result) {
        //console.log('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
        let childId = 'collapse' + idGenerator;
        idGenerator++;
        fs.appendFileSync(path, '<div id="accordion' + idGenerator + '" role="tablist">\n', 'utf8');
        fs.appendFileSync(path, '<div class="card">\n', 'utf8');
        fs.appendFileSync(path, '<div class="card-header" role="tab" id="' + 'p' + childId + '">\n', 'utf8');
        fs.appendFileSync(path, '<button class="collapsed bg-success" data-toggle="collapse" data-target="#' + childId + '" aria-expanded="false" aria-controls="' + childId + '">\n', 'utf8');
        fs.appendFileSync(path, result.description + '</button>\n', 'utf8');
        fs.appendFileSync(path, '</div>\n', 'utf8');
        fs.appendFileSync(path, '<div id="' + childId + '" class="collapse show" role="tabpanel" aria-labelledby="' + 'p' + childId + '" data-parent="#accordion' + idGenerator + '">\n', 'utf8');
        fs.appendFileSync(path, '<div class="card-body">\n', 'utf8');
    },

    specStarted: function(result) {
        //console.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
    },

    specDone: function(result) {
        //console.log('Spec: ' + result.description + ' was ' + result.status);
        if (result.status === 'passed') {
            fs.appendFileSync(path, '<p class="bg-success">' + result.description + '</p>', 'utf8');
        } else {
            fs.appendFileSync(path, '<p class="bg-danger">' + result.description + '</p>', 'utf8');
        }
        // for(var i = 0; i < result.failedExpectations.length; i++) {
        //     console.log('Failure: ' + result.failedExpectations[i].message);
        //     console.log(result.failedExpectations[i].stack);
        // }
        //console.log(result.passedExpectations.length);
    },

    suiteDone: function(result) {
        // console.log('Suite: ' + result.description + ' was ' + result.status);
        // console.log(result.passedExpactations);
        // for(var i = 0; i < result.failedExpectations.length; i++) {
        //     console.log('AfterAll ' + result.failedExpectations[i].message);
        //     console.log(result.failedExpectations[i].stack);
        // }
        fs.appendFileSync(path, '</div>\n', 'utf8');
        fs.appendFileSync(path, '</div>\n', 'utf8');
        fs.appendFileSync(path, '</div>\n', 'utf8');
        fs.appendFileSync(path, '</div>\n', 'utf8');
    },

    jasmineDone: function() {
        fs.appendFileSync(path, '</body>\n', 'utf8');
        fs.appendFileSync(path, '</html>\n', 'utf8');
        console.log(global.jasmine.Suite());
        for(let key in global.jasmine.Suite()){
            console.log(key);
        }
    }
};

module.exports = myReporter;