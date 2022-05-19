export const SETSONG = "SETSONG";

export const Set_Song = (idSong, songs) => {
    const findSong = songs.find(song => song.id === idSong)
    if (!findSong)
        return {
            type: SETSONG,
            payload: songs[0]
        }
    else
        return {
            type: SETSONG,
            payload: findSong
        }

}