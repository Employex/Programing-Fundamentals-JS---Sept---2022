function pascalCaseSplitter(input) {
    let firstLetter = input[0]
    let lower = input.toLowerCase()

    for (let index = 1; index < input.length; index++) {
        if(input[index]!==lower[index]){
            firstLetter+=', '
        }
        firstLetter+=input[index]

    }
    console.log(firstLetter);

}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')