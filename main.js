"use strict";
exports.__esModule = true;
var moment = require("moment");
var id = "9408144756086";
function validityTest(id) {
    var sumOddIdPosition = 0;
    var evenIdPosition = 0;
    if (!id) {
        console.log("ID is empty or null");
        return false;
    }
    if (id.split('').some(function (number) { return isNaN(parseInt(number)); })) {
        console.log("ID should only have numbers");
        return false;
    }
    if (id.length != 13) {
        console.log("ID length should be 13");
        return false;
    }
    if (moment(id.substring(0, 6), "YYMMDD").isValid()) {
        console.log("First 6 digits is not a valid date");
        return false;
    }
    for (var i = 0; i < 12; i += 2) {
        sumOddIdPosition += Number(id.charAt(i));
        evenIdPosition = evenIdPosition * 10 + Number(id.charAt(i + 1));
    }
    var stringEvenIdPosition = (evenIdPosition * 2).toString();
    var sumEvenIdPosition = 0;
    for (var i = 0; i < stringEvenIdPosition.length; i++) {
        sumEvenIdPosition += Number(stringEvenIdPosition.charAt(i));
    }
    var parity = 10 - (sumEvenIdPosition + sumOddIdPosition) % 10;
    if (parity != Number(id.charAt(12))) {
        console.log("Parity number is in correct");
        return false;
    }
    return true;
}
