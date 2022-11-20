function stringSubstring(word, text) {
    let tokens = text.split(' ')
    for(let token of tokens){
        if (word.toLowerCase() === token.toLowerCase()) {
            return console.log(word);
       } 
    }
    console.log(`${word} not found!`);
    
}
stringSubstring('javascript',
    'JavaScript is the best programming language'
)