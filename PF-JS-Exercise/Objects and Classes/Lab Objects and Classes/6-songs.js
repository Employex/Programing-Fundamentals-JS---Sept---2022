function songs(input) {
    
    let songs = []
    let numberOfSong = input.shift()
    let typeSong = input.pop()

    for (let i = 0; i < numberOfSong; i++) {
        let [typeList, name] = input[i].split('_')
        let song = {typeList, name}
        songs.push(song)
    }

    if (typeSong === "all") {
        songs.forEach((song) => console.log(song.name))
    } else {
        let filter = songs.filter((song) => song.typeList === typeSong)
        filter.forEach((song) => console.log(song.name))
    }


}
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])