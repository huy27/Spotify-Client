import { SHOWLYRIC } from './../action/LyricAction';


const initialLyric = {
    isShow: false,
    lyric: "",
}

const LyricReducer = (state = initialLyric, action) => {
    switch (action.type) {
        case SHOWLYRIC:
            return {
                ...state,
                isShow: action.payload.isShow,
                lyric: action.payload.lyric
            }
        default:
            return { ...state }
    }
}

export default LyricReducer;