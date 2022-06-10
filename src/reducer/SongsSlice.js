import { createSlice } from "@reduxjs/toolkit";

const songs = [];

const SongsSlice = createSlice({
  name: "songs",
  initialState: songs,
  reducers: {
    SetSongs: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { SetSongs } = SongsSlice.actions;
export default SongsSlice.reducer;
