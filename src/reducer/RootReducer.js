import { combineReducers } from "redux"
import SongSReducer from './SongsSlice';
import SongReducer from './SongSlice';
import FavoritesReducer from './FavoriteSlice';
import AudioReducer from './AudioSlice';
import LyricReducer from './LyricSlice';

const RootReducer = combineReducers({
    Songs: SongSReducer,
    Song: SongReducer,
    Favorite: FavoritesReducer,
    Audio: AudioReducer,
    Lyric: LyricReducer
})

export default RootReducer