function phoneBook(info) {
    let personInfo = {}
    for (let elements of info) {
        let [name, number] = elements.split(' ')
        personInfo[name] = number
    }
    let entries = Object.entries(personInfo)
    for(let key of entries){
        console.log(`${key[0]} -> ${key[1]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)