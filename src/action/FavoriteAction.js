

export const ADDFAVORITE = 'ADDFAVORITE';
export const REMOVEFAVORITE = 'REMOVEFAVORITE';
export const ADDFAVORITES = 'ADDFAVORITES';

export const Add_Favorites = (songs) => {
    return {
        type: ADDFAVORITES,
        payload: songs
    }
}

export const Add_Favorite = (song) => {
    return {
        type: ADDFAVORITE,
        payload: song
    }
}

export const Remove_Favorite = (songId) => {
    return {
        type: REMOVEFAVORITE,
        payload: songId
    }
}