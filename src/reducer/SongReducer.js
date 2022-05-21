import { SETSONG } from './../action/SongAction';


const song = {}


const SongReducer = (state = song, action) => {
    switch (action.type) {
        case SETSONG:
            return action.payload
        default:
            return { ...state }
    }
}

export default SongReducer