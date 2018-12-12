export {}

 let id = "9408144756081";
 console.log(validityTest(id));
function validityTest(id) {
    let sumOddIdPosition = 0;
    let evenIdPosition = 0;

    if (!id) {
        return false;
    }

    if (id.split('').some(number => isNaN(parseInt(number))) || id.length != 13) {
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
        return false;
    }   
    return true;
}