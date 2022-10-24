function PalindromeIntegers(arrayNumbers) {
  let arrayNumbersLength = arrayNumbers.length;
  
  for (let i = 0; i < arrayNumbersLength; i++) {
    let arrayToString = arrayNumbers[i].toString();
    let reverseString = arrayToString.split("").reverse().join('');

    if (arrayToString === reverseString) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
PalindromeIntegers([123, 323, 421, 121]);
