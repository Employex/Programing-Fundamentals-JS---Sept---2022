function modernTimesOfHashTag(text) {
    let textArray = text.split(' ')
    

    textArray.forEach(word => {
        if (word.startsWith('#') && word.length > 1) {
            let isLetter = true
            let temp =''
            for (let index = 1; index < word.length; index++) {
                let char = word[index].toLowerCase()
                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isLetter = false
                    break;
                }else{
                    temp+= word[index]
                }
                
            }
            if(isLetter){
                console.log(temp);
            }
        }

    });
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')