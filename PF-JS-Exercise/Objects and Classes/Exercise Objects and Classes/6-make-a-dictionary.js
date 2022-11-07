function makeADictionary(input) {

    let songs = []


    for (let i = 0; i < input.length; i++) {
        let [term, defenition] = input[i].split(':')
        let song = { term, defenition }
        songs.push(song)
    }

    songs.sort((a, b) => a.term.localeCompare(b.term))
    songs.forEach((song) => console.log(`Term: ${(song.term).replaceAll(' {"" ',)} => Definition: ${song.defenition}`))
    



}
makeADictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for afare."}',
    
    '{"Boiler":"A fuel-burningapparatus or container forheating water."}', 
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])