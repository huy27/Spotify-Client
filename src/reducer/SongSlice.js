import { createSlice } from "@reduxjs/toolkit";

const song = {};

const SongSlice = createSlice({
  name: "Song",
  initialState: song,
  reducers: {
    SetSong: (state, action) => {
      const findSong = action.payload.songs.find(
        (song) => song.id === action.payload.idSong
      );
      if (!findSong) {
        state.song = action.payload.songs[0];
      } else {
        state.song = findSong;
      }
    },
    ClearSong: (state, action) => {
      state.song = {};
    },
  },
});

export const { SetSong, ClearSong } = SongSlice.actions;
export default SongSlice.reducer;
