function equalSums(array) {
  let foundIndex = 'no';
  let arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let l = 0; l < i; l++) {
        sumLeft+=array[l]
    }

    for(let r=i+1;r<arrayLength;r++){
        sumRight+=array[r]
    }

    if(sumLeft===sumRight){
        foundIndex = i
    }

  }

  console.log(foundIndex);

}
equalSums([1, 2, 3, 3]);
