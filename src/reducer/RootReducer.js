import { combineReducers } from "redux"
import SongSReducer from './SongsReducer';
import SongReducer from './SongReducer';
import FavoritesReducer from './FavoriteReducer';



const RootReducer = combineReducers({
    Songs: SongSReducer,
    Song: SongReducer,
    Favorite: FavoritesReducer,
})

export default RootReducer