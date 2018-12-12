"use strict";
exports.__esModule = true;
var id = "9408144756081";
console.log(validityTest(id));
function validityTest(id) {
    var sumOddIdPosition = 0;
    var evenIdPosition = 0;
    if (!id) {
        return false;
    }
    if (id.split('').some(function (number) { return isNaN(parseInt(number)); }) || id.length != 13) {
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
        return false;
    }
    return true;
}
