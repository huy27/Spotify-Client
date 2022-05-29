
import { createSlice } from '@reduxjs/toolkit';

const initialFavorites = {
    songs: []
}

const favoriteSlice = createSlice({
    name: 'Favorite',
    initialState: initialFavorites,
    reducers: {
        addListFavoriteSong: (state, action) => {
            state.songs = action.payload
        },
        addFavoriteSong: (state, action) => {
            state.songs.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.songs = state.songs.filter(song => song.id !== action.payload);
        }
    }
})

export const { addListFavoriteSong, addFavoriteSong, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;