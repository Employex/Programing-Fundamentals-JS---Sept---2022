function matchFullName(input){
    let text = input.shift()
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g

    let matches = text.match(pattern)
   
    console.log(matches.join(', '));
}
matchFullName(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])