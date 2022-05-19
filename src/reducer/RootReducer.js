import { combineReducers } from "redux"
import SongSReducer from './SongsReducer';
import SongReducer from './SongReducer';



const RootReducer = combineReducers({
    Songs: SongSReducer,
    Song: SongReducer,
})

export default RootReducer