function rounding(num1,num2){
    if(num2>15){
        num2=15
    }
    let total=parseFloat(num1.toFixed(num2))
    console.log(total);

}
rounding(10.5,3)