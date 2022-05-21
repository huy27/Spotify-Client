import { combineReducers } from "redux"
import SongSReducer from './SongsReducer';
import SongReducer from './SongReducer';
import FavoritesReducer from './FavoriteReducer';
import AudioReducer from './AudioReducer';
import LyricReducer from './LyricReducer';



const RootReducer = combineReducers({
    Songs: SongSReducer,
    Song: SongReducer,
    Favorite: FavoritesReducer,
    Audio: AudioReducer,
    Lyric: LyricReducer
})

export default RootReducer