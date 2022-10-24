function signCheck(firstNumber, secondNumber, thirdNumber) {
    let isPositive = true
    let result = firstNumber * secondNumber

    function multiply(digit) {
        if (digit < 0) {
            isPositive = false
        } else {
            isPositive = true
        }

        if ((digit == 0) || (thirdNumber == 0)) {
            return console.log('Positive');
        }

        if (isPositive && thirdNumber > 0) {
            return console.log('Positive');
        } else if (!isPositive && thirdNumber < 0) {
            return console.log('Positive');
        } else {
            return console.log('Negative');
        }


    }
    multiply(result)


}
signCheck(-6,
    -12,
    14

);