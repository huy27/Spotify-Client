export const SETSONGS = "SETSONGS";

export const Set_Songs = (songs) => {
    return {
        type: SETSONGS,
        payload: songs
    }
}