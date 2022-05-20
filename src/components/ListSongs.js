import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Set_Song } from "../action/SongAction";

export default function ListSongs() {
  const song = useSelector(state => state.Song);
  const DataSongs = useSelector(state => state.Songs.data);

  const dispatch = useDispatch();

  const [idSong, setidSong] = useState(DataSongs && DataSongs[0]);

  const handlePlaySong = (idSong) => {
    setidSong(idSong)
    dispatch(Set_Song(idSong, DataSongs))
  };

  useEffect(() => {
    setidSong(song.id)
  }, [song])

  return (
    <div className="col-span-3 overflow-auto">
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
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-left">{song.author}</td>
              <td className="text-center">
                {idSong === song.id && <img className="disk-active" src={song.links.images[0].url} alt='avatar' />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
