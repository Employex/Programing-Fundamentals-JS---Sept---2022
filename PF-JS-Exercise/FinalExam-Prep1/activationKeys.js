function activationKeys(input){
    let activationKey = input.shift()
    let command = input.shift()


    while(command!=="Generate"){
        let action = command.split('>>>')
        let commandName = action.shift() 
        
        switch(commandName){
            case 'Contains':{
                let substring = action[0]
                if(activationKey.includes(substring)){
                    console.log(`${activationKey} contains ${substring}`);
                }else{
                    console.log('Substring not found!');
                }
                break;
            }
            case 'Flip':{
                let casing = action[0]
                let startIndex = action[1]
                let endIndex = action[2]

                let part = activationKey.substring(startIndex,endIndex)
                let newPart = casing === 'Upper'? part.toUpperCase():part.toLowerCase()
                activationKey = activationKey.replace(part,newPart)
                console.log(activationKey);
                break;
            }
            case 'Slice':{
                let startIndex = action[0]
                let endIndex = action[1]
                let substring = activationKey.substring(startIndex,endIndex)
                activationKey = activationKey.replace(substring,'')
                console.log(activationKey);
                break;
            }
        }



        command = input.shift()
    }
    console.log(`Your activation key is: ${activationKey}`);
}
activationKeys((["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
)