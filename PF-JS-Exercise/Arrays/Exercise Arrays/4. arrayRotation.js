function arrayRotation(array,rotates){
    for(let index=0;index<rotates;index++){
        let firstElement = array[0]

        for(let innerI=0; innerI<array.length;innerI++){
            array[innerI]=array[innerI+1]
        }
        array[array.length-1]=firstElement

    }
    console.log(array.join(' '));

}
arrayRotation([51, 47, 32, 61, 21], 2)