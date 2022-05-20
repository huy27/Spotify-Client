import React, { useState, useEffect, useRef } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Set_Song } from "../action/SongAction";

export default function Playing() {
  const player = useRef();
  const dispatch = useDispatch();

  const song = useSelector(state => state.Song);
  const songs = useSelector(state => state.Songs.data);

  const [volumeText, setVolumeText] = useState("100");

  useEffect(() => {
    player.current.audio.current.addEventListener('volumechange', (e) => {
      setVolumeText(`${((e.target).volume * 100).toFixed(0)}`)
    })

    return (
      player.current.audio.current.removeEventListener('volumechange', (e) => {
        setVolumeText(`${((e.target).volume * 100).toFixed(0)}`)
      })
    )
  }, [])

  const handleClickNext = () => {
    const next = songs.findIndex(s => s.id === song.id);
    dispatch(Set_Song(songs[next + 1]?.id, songs))
  }
  const handleClickPre = () => {
    const previous = songs.findIndex(s => s.id === song.id);
    dispatch(Set_Song(songs[previous - 1]?.id, songs))
  }
  return (
    <div>
      <AudioPlayer
        autoPlay={false}
        ref={player}
        className="player-music"
        src={song.url}
        showSkipControls={true}
        showJumpControls={true}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
        customIcons={{
          play: <i className="fa-solid fa-play"></i>,
          pause: <i className="fa-solid fa-pause"></i>
        }}
        customAdditionalControls={
          [
            RHAP_UI.LOOP
          ]
        }
        customVolumeControls={[RHAP_UI.VOLUME, <div className="white-text" key={2}>&nbsp;&nbsp;{volumeText}</div>]}
      />
    </div>
  );
}
