function  replaceRepeatingChars(input){
    let firstLetter = input[0]
    for(let index = 1;index < input.length;index++){
        if(input[index]!==input[index-1]){
            
            firstLetter+=input[index]
        }

    }
    console.log(firstLetter);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')