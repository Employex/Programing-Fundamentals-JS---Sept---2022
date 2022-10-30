function reverseString(string){
    string = string.split(' ')

    
   
    for(let i=0;i<string.length;i++){
        let currentIndex = string[0].split('').reverse().join('')
        console.log(currentIndex);
    }
   
    
}
reverseString('Hello')