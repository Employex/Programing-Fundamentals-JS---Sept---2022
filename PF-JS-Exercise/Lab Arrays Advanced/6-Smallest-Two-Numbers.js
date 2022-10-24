function smallestTwoNumbers(array){
    let sort = array.sort((a,b)=>a-b)
    let result = sort.slice(0,2)
    console.log(result.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5])