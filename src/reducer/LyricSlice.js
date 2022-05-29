import { createSlice } from '@reduxjs/toolkit';

const initialLyric = {
    isShow: false,
    lyric: "",
}

const lyricSlice = createSlice({
    name: "lyric",
    initialState: initialLyric,
    reducers: {
        ShowLyric: (state, action) => {
            state.isShow = action.payload.isShow;
            state.lyric = action.payload.lyric;
        }
    }
})

export const { ShowLyric } = lyricSlice.actions;

export default lyricSlice.reducer;