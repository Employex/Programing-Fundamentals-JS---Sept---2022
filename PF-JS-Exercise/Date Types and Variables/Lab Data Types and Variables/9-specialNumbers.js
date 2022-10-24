function specialNumbers(number) {

    for(let i=1;i<=number;i++){
        let num = i.toString()

        let sumOfDigits = 0
        let numberLength = num.length

        for(let j=0;j<numberLength;j++){
            sumOfDigits+=Number(num[j])
        }

        switch(sumOfDigits) {
            case 5: ;
            case 7: ; 
            case 11: console.log (`${num} -> True`); break;
            default: console.log (`${num} -> False`); break;
        }
    }


}
specialNumbers(15)