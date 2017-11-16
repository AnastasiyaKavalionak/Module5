'use strict';

function sendKeys(element, keys) {
//+clear
    return element.sendKeys(keys);
}

function click(element) {

    return element.click();
}

function isInList(elements, text, result) {

    elements.getText().then((res) => {
        expect(res[0] === text).toBe(result);
    });
}

function deleteAllNotes(deleteButtons) {

    return deleteButtons.each(function (deleteButton) {
        return click(deleteButton);
    });
}

module.exports.sendKeys = sendKeys;
module.exports.click = click;
module.exports.isInList = isInList;
module.exports.deleteAllNotes = deleteAllNotes;