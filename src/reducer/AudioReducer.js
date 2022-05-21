import { SETVOLUME } from "../action/VolumeAction";


const initialAudio = {
    volume: "100",
    loop: false
}

const AudioReducer = (state = initialAudio, action) => {
    switch (action.type) {
        case SETVOLUME:
            return {
                ...state,
                volume: action.payload
            }
        default:
            return state
    }
}

export default AudioReducer;