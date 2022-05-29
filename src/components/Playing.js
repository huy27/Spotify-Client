import React, { useEffect, useRef } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { Set_Song } from "../action/SongAction";
import { SetVolume } from "../reducer/AudioSlice";
import ReactTooltip from 'react-tooltip';
import { ShowLyric } from "../reducer/LyricSlice";

export default function Playing() {
  const player = useRef();
  const dispatch = useDispatch();

  const song = useSelector(state => state.Song);
  const songs = useSelector(state => state.Songs.data);
  const audio = useSelector(state => state.Audio);
  const isShowLyric = useSelector(state => state.Lyric.isShow);


  useEffect(() => {
    player.current.audio.current.addEventListener('volumechange', (e) => {
      dispatch(SetVolume(`${((e.target).volume * 100).toFixed(0)}`));
    })

    return (
      player.current.audio.current.removeEventListener('volumechange', (e) => {
        dispatch(SetVolume(`${((e.target).volume * 100).toFixed(0)}`));
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

  const handleShowLyric = (isShow, lyric) => {
    dispatch(ShowLyric({ isShow, lyric }));
  }

  return (
    <div>
      <AudioPlayer
        autoPlay={false}
        volume={audio.volume / 100}
        loop={audio.loop}
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
            <button className="button_lyrics" onClick={() => handleShowLyric(!isShowLyric, song.lyric)}>
              <i className="fa-solid fa-music" data-tip="Lyrics"></i>
            </button>
          ]
        }
        customVolumeControls={[RHAP_UI.VOLUME, <div className="white-text" key={2}>&nbsp;&nbsp;{audio.volume}</div>]}
      />
      <ReactTooltip type="light" />
    </div>
  );
}
