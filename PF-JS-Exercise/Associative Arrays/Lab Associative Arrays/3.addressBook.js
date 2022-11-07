function addressBook(input){
    let info = {}

    for(let el of input){
        let [name,address] = el.split(':')
        info[name] = address
    }
    let sortedObject = Object.entries(info)
    sortedObject.sort((kvpA,kvpB) => kvpA[0].localeCompare(kvpB[0]))

    

    for(let kvp of sortedObject){
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)