function convertToJSON(json){
    let person = JSON.parse(json)

    for(let key of Object.keys(person)){
        console.log(`${key}: ${person[key]}`);
    }
}
convertToJSON('{"name": "George", "age": 40, "town": "Sofia"}')