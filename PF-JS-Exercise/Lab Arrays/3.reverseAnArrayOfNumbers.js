function reverseAnArrayOfNumbers(number, array) {
  let result=[]
  for(let i=0;i<number;i++){
    result[i]=array[number-1-i] 
  }
 
  console.log(result.join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
