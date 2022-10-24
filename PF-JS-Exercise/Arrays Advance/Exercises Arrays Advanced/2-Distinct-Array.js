function districtsArray(array){
    let currentArray = []
    let arrayLength = array.length
    for(let i = 0;i < arrayLength;i++){
        let currentIndex = array[i]
        if(!currentArray.includes(currentIndex)){
            currentArray.push(currentIndex)
        }
    }
    console.log(currentArray.join(' '));
}
districtsArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
