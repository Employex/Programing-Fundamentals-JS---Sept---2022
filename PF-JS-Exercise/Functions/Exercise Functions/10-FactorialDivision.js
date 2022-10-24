function factorialDivision(firstNumber,secondnumber){
    function factrial(firstNumber){
        if (num < 0){

            return -1;
        } else if (num == 0) {

            return 1;
        }else {
      return (num * factrial(num - 1));
  }
    }
    
    
    
    let sum = factrial(firstNumber)
    console.log(sum);

}
factorialDivision(5,2)