function AddAndSubtract(array) {
  let newArray = [];
  let arraySum = 0;
  let newArraySum = 0;

  let arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    let currentIndex = array[i];

    let Even = currentIndex + i;
    let Odd = currentIndex - i;

    if (currentIndex % 2 == 0) {
        newArray.push(Even)
    }else{
        newArray.push(Odd)
    }
    arraySum+=currentIndex
    newArraySum+=newArray[i]
    
  }
  console.log(newArray);
  console.log(arraySum);
  console.log(newArraySum);
}
AddAndSubtract([5, 15, 23, 56, 35]);
