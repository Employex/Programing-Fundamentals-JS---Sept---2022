function detectEmojis(input) {
    let text = input.shift()
    let threshold = 1
    let emodjiCount = 0
    let coolEmojis = []

    let digits = text.match(/\d/g)
    for (const digit of digits) {
        threshold *= digit
    }

    let emodjiMatches = text.matchAll(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/gm)
    for (const emodjiMatch of emodjiMatches) {
        let name = emodjiMatch.groups.name
        let emodji = emodjiMatch[0]
        emodjiCount++

        let emodjiCoolnes = 0
        for(let i=0;i<name.length;i++){
            emodjiCoolnes+=name.charCodeAt(i)
        }

        if(emodjiCoolnes>threshold){
            coolEmojis.push(emodji)
        }
    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emodjiCount} emojis found in the text. The cool ones are:`);
    for (const emodji of coolEmojis) {
        console.log(emodji);
    }
}

detectEmojis(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);