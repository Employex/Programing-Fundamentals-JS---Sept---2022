function sumDigit(number){
    number = number.toString()
    let sum=0
    let numberLength=number.length

    for(let i=0;i<numberLength;i++){
        sum+=Number(number[i])
        
    }
    console.log(sum);
}
sumDigit(245678)
