import { combineReducers } from "redux"
import SongSReducer from './SongsReducer';
import SongReducer from './SongReducer';
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