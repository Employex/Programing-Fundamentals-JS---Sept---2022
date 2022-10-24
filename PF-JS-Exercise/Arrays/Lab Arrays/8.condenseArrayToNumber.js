function condense(numbers) {
  let resultArray = numbers;
  let currentArray = [];

  let index = 0;
  while (resultArray.length > 1) {
    if (index + 1 === resultArray.length) {
      resultArray = currentArray;
      index = 0;
      currentArray = [];
      continue;
    }

    let sum = resultArray[index] + resultArray[index + 1];
    currentArray.push(sum);
    index++;
  }

  console.log(resultArray[0]);
}
condense([1]);
