function employee(array){
    let list = {}

    array.forEach(person => {
        list[person]=person.length
    });
    
    for(const key in list){
        console.log(`Name: ${key} -- Personal Number: ${list[key]}`);
    }

   
}
employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])