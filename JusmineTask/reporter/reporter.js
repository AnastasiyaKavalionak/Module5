'use strict';

const fs = require('fs');
const path = require('path');

let log = {};

const myReporter = {

    jasmineStarted: function(suiteInfo) {
        //writeInObject(log, 'test', suiteInfo.totalSpecsDefined);
    },

    suiteStarted: function(result) {
        console.log('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
    },

    specStarted: function(result) {
        console.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
    },

    specDone: function(result) {
        console.log('Spec: ' + result.description + ' was ' + result.status);
        for(var i = 0; i < result.failedExpectations.length; i++) {
            console.log('Failure: ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
        console.log(result.passedExpectations.length);
    },

    suiteDone: function(result) {
        console.log('Suite: ' + result.description + ' was ' + result.status);
        for(var i = 0; i < result.failedExpectations.length; i++) {
            console.log('AfterAll ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
    },

    jasmineDone: function() {
        // fs.writeFile(path, JSON.stringify(log, null, 2), (err) => {
        //     if (err) {
        //         console.log('can not to write json file ' + err);
        //     }
        // })
    }
};

function writeInObject(object, parameters, value) {
    parameters.reduce(function (obj, current) {
       return obj[current];
    }, object);
}

module.exports = myReporter;