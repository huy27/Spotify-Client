import "./App.css";
import Navbar from "./components/Navbar";
import ListSongs from "./components/ListSongs";
import Playing from "./components/Playing";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Set_Songs } from './action/SongsAction';
import { Set_Song } from "./action/SongAction";
import { getSongsApi } from './api/SongApi';

import DataSongs from "./data/songs.json";

function App() {
  const dispatch = useDispatch();

  const getSongs = async () => {
    const result = await getSongsApi();
    dispatch(Set_Songs(DataSongs));
    dispatch(Set_Song(0, DataSongs));
  }

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
        <ListSongs />
      </div>
      <Playing />
    </div>
  );
}

export default App;
