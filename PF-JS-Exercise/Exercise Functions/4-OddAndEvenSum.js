function OddAndEvenSum(number) {
  let numberAsString = number.toString();
  let sumOdd = 0;
  let sumEven = 0;
  let numberLength = numberAsString.length;

  for (let i = 0; i < numberLength; i++) {
    let currentNum = Number(numberAsString[i]);

    if (currentNum % 2 == 0) {
      sumEven+=currentNum;
    } else {
      sumOdd+=currentNum;
    }
  }

  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
OddAndEvenSum(1000435);
