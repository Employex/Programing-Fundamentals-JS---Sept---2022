function equalArrays(firstArray, secondArray) {
  let sum = 0;
  let firstArrayLength = firstArray.length

  for (let i = 0; i < firstArrayLength; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      return;
    }
    sum += Number(firstArray[i]);
  }

  console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrays(["10", "20", "40"], ["10", "20", "30"]);
