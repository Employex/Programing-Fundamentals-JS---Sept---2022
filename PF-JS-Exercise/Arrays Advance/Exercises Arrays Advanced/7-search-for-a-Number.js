function searchForANumber(array,action){
    let takeOfNumber = action[0]
    let deleateOfNumber = action[1]
    let searchOfNumber=action[2]

    let takenArray =  array.slice(0,takeOfNumber)
    takenArray = takenArray.splice(deleateOfNumber)
    
    counter = 0

    for(let number of takenArray){
        if(number===searchOfNumber){
            counter++
        }
    }

    console.log(`Number ${searchOfNumber} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
[5, 2, 3])