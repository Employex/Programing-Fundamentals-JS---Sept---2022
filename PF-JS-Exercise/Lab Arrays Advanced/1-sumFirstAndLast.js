function sumFirstAndLast(input){
  let firstNumber = Number(input[0])
  
  let lastNumber = Number(input.pop())

  let sum = firstNumber+lastNumber
  console.log(sum);


}
sumFirstAndLast(['20', '30', '40'])