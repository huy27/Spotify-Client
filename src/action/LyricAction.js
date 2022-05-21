

export const SHOWLYRIC = "SHOWLYRIC";

export const ShowLyric = (isShow, lyric) => {
    return {
        type: SHOWLYRIC,
        payload: {
            isShow: isShow,
            lyric: lyric
        }
    }
}