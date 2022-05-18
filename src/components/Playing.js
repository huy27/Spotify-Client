import React, { useContext, useState, useEffect, useRef } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

export default function Playing() {
  const player = useRef();
  const { song, handleSetSong } = useContext(Songs);
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
    handleSetSong(song.id + 1)
  }
  const handleClickPre = () => {
    handleSetSong(song.id - 1)
  }
  return (
    <div>
      <AudioPlayer
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
            RHAP_UI.LOOP,
            <i className="rhap_button-clear rhap_repeat-button fa-solid fa-shuffle"></i>
          ]
        }
        customVolumeControls={[RHAP_UI.VOLUME, <div key={2}>&nbsp;&nbsp;{volumeText}</div>]}
      />
    </div>
  );
}
