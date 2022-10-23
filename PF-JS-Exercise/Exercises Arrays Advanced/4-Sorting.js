function sorting(array) {
    let newArray = []
    let sortedArray = array.sort((a, b) => a - b)

    
    for (let i = 0; i < sortedArray.length; i++) {
        let firstNumber = sortedArray.shift()
        let lastNumber = sortedArray.pop()

        newArray.push(lastNumber)
        newArray.push(firstNumber)
    }
    newArray.push(sortedArray.pop())
    newArray.push(sortedArray.shift())
    

    console.log(newArray.join(' '));


}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])