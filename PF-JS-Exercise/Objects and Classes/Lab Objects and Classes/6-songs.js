function songs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }

    }

    let songs = []
    let numberOfSong = input.shift()
    let typeSong = input.pop()

    for (let i = 0; i < numberOfSong; i++) {
        let [typeList, name, time] = input[i].split('_')
        let song = new Song(typeList, name, time)
        songs.push(song)
    }

    if (typeSong === "all") {
        songs.forEach((i) => console.log(i.name))
    } else {
        let filter = songs.filter((i) => i.type === typeSong)
        filter.forEach((i) => console.log(i.name))
    }


}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])