
import { ADDFAVORITE, REMOVEFAVORITE, ADDFAVORITES } from './../action/FavoriteAction';


const initialFavorites = {
    songs: []
}

const FavoritesReducer = (state = initialFavorites, action) => {
    switch (action.type) {
        case ADDFAVORITES:
            return {
                ...state,
                songs: action.payload
            }
        case ADDFAVORITE:
            return {
                ...state,
                songs: [
                    ...state.songs,
                    action.payload
                ]
            }
        case REMOVEFAVORITE:
            let newSongs = [...state.songs];
            newSongs = newSongs.filter(song => song.id !== action.payload);
            // newSongs.splice(action.payload, 1);
            return {
                ...state,
                songs: newSongs
            }
        default:
            return state;
    }
}

export default FavoritesReducer