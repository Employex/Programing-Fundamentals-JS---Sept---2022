function ReverseInPlace(array){
    for (let i=0;i<array.length/2;i++){
        let tempElement = array[i]
        array[i]= array[array.length-1-i]
        array[array.length-1-i]=tempElement
    }
    
    let result= ' '
    for(let i=0;i<array.length;i++){
        result+=array[i] 

        if(i<array.length-1){
            result+=' '
        }
    }
    console.log(result);
}
ReverseInPlace(['a', 'b', 'c', 'd', 'e'])