function theImitationGame(input) {
    let arr = input.slice()
    let message = arr.shift()
    let command = arr.shift()
    let temp = ''

    while (command !== 'Decode') {
        let tokens = command.split('|')
        let name = tokens[0]

        switch (name) {
            case 'Move':
                let number = Number(tokens[1])
                let nuberOfletters = message.substring(0, number)
                temp = message.replace(nuberOfletters, '')
                temp += nuberOfletters
                message = temp
                break;

            case 'Insert':
                let index = Number(tokens[1])
                let value = tokens[2]
                temp = message.split('')
                temp.splice(index,0,value)
                message=temp.join('')
                break;
            case 'ChangeAll':
                let substring = tokens[1]
                let replacement = tokens[2]

                while(message.includes(substring)){
                    temp = message.replace(substring,replacement)
                    message = temp
                } 
                break;

        }
        command = arr.shift()
    }
    console.log(`The decrypted message is: ${message}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
)
