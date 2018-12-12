export {}
import * as moment from "moment";

 let id = "9408144756086";

function validityTest(id: string): boolean {
    let sumOddIdPosition = 0;
    let evenIdPosition = 0;

    if (!id) {
        console.log("ID is empty or null");
        return false;
    }

    if (id.split('').some(number => isNaN(parseInt(number)))) { 
        console.log("ID should only have numbers");
        return false;
    }

    if (id.length != 13 ) {
        console.log("ID length should be 13");
        return false;
    }

    if (moment(id.substring(0, 6), "YYMMDD").isValid()) {
        console.log("First 6 digits is not a valid date");
        return false;
    }

    for (let i = 0; i < 12; i += 2) {
        sumOddIdPosition += Number(id.charAt(i));
        evenIdPosition = evenIdPosition * 10 + Number(id.charAt(i + 1));
    }
    let stringEvenIdPosition = (evenIdPosition * 2).toString();
    let sumEvenIdPosition = 0
    for (let i = 0; i < stringEvenIdPosition.length; i++) {
        sumEvenIdPosition += Number(stringEvenIdPosition.charAt(i));
    }

    let parity = 10 - (sumEvenIdPosition + sumOddIdPosition) % 10;
    if (parity != Number(id.charAt(12))) {
        console.log("Parity number is in correct");
        return false;
    }
        
    return true;
}