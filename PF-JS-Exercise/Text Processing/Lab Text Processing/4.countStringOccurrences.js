function countStringOccurrences(text,word){
    let counter = 0
    let splited = text.split(' ') 
    
    for(let el of splited){
        if(el === word){
            counter++
        }
    }
    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence',
'is'
)