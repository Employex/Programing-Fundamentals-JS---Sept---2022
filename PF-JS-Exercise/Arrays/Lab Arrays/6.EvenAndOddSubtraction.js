function EvenAndOddSubtraction(numbers){
    let sumEven = 0
    let sumOdd = 0
    for(let textNumber of numbers){
        let number=Number(textNumber)
        if(number%2==0){
            sumEven+=number
        }else{
            sumOdd+=number
        }
    }
    let difference = sumEven - sumOdd
    console.log(difference);
    
}
EvenAndOddSubtraction([2,4,6,8,10])