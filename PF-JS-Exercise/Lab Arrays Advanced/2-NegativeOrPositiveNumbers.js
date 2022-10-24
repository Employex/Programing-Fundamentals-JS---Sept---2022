function NegativeOrPositiveNumbers(input){
    let result=[]

    for(const number of input){
        if(number<0){
            result.unshift(number)
        }else{
            result.push(number)
        }
    }
    
    for(const numbers of result){
        console.log(numbers);
    }

}
NegativeOrPositiveNumbers(['7', '-2', '8', '9'])