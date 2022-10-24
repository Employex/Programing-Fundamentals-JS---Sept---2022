function maxNumber(array) {
  let currentArray = [];

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    let isBigger = true;


    for (let k = i + 1; k < array.length; k++) {
      if (currentNum <= array[k]) {
        isBigger = false;
      }
    }

    if (isBigger) {
      currentArray.push(array[i]);
    }
  }
  console.log(currentArray.join(" "));
}
maxNumber([1, 4, 3, 2]);
