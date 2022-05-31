import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addListFavoriteSong, addFavoriteSong, removeFavorite } from "../reducer/FavoriteSlice";
import { ShowLyric } from "../reducer/LyricSlice";
import { Set_Song } from "../action/SongAction";

const ListSongs = ({ height }) => {
  const song = useSelector(state => state.Song);
  const DataSongs = useSelector(state => state.Songs.data);
  const favorite = useSelector(state => state.Favorite.songs);
  const lyric = useSelector(state => state.Lyric);
  const dispatch = useDispatch();

  useEffect(() => {
    if (favorite.length > 0) {
      localStorage.setItem("Favorite", JSON.stringify(favorite));
    }
  }, [favorite]);

  useEffect(() => {
    if (localStorage.getItem("Favorite")) {
      dispatch(addListFavoriteSong(JSON.parse(localStorage.getItem("Favorite"))));
    }
  }, [])

  const [idSong, setidSong] = useState(DataSongs && DataSongs[0]);

  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    dispatch(Set_Song(idSong, DataSongs));
    dispatch(ShowLyric({ isShow: lyric.isShow, lyric: DataSongs.find(s => s.id === idSong)?.lyric }));
  };

  const handleAddFavorite = (song) => {
    if (!favorite.find(f => f.id === song.id)) {
      dispatch(addFavoriteSong(song));
    }
    else {
      if (favorite.length === 1) {
        localStorage.removeItem("Favorite");
      }
      dispatch(removeFavorite(song.id));
    }
  }

  useEffect(() => {
    setidSong(song.id)
  }, [song])

  return (
    <div className="col-span-3 overflow-auto" style={{ height: `${height}` }}>
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Bài hát</th>
            <th className="text-left">Tác giả</th>
            <th className="w-[15%]"></th>
          </tr>
        </thead>
        <tbody>
          {DataSongs && DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${idSong === song.id && 'bg-slate-600 text-teal-400'}`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">
                <i onClick={() => handleAddFavorite(song)} className={`fa-solid fa-star ${favorite.find(f => f.id === song.id) && "fa-star-active"}`}>
                </i>
              </td>
              <td>{song.name}</td>
              <td className="text-left">{song.author}</td>
              <td className="text-center">
                {idSong === song.id && <img className="disk-active" src={song.image} alt='avatar' />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSongs