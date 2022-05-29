import { createSlice } from "@reduxjs/toolkit";

const initialAudio = {
    volume: "100",
    loop: false
}

const audioSlice = createSlice({
    name: "audio",
    initialState: initialAudio,
    reducers: {
        SetVolume: (state, action) => {
            state.volume = action.payload;
        }
    }
})

export const {SetVolume} = audioSlice.actions;
export default audioSlice.reducer;