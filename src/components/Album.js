
import Navbar from './Navbar';
import ListSongs from './ListSongs';
import Playing from './Playing';
import { useDispatch, useSelector } from 'react-redux';
import { getSongsApi } from './../api/SongApi';
import { Set_Songs } from '../action/SongsAction';
import { Set_Song } from '../action/SongAction';
import { useEffect } from 'react';
import DataSongs from "./../data/songs.json";
import { useLocation, useParams } from 'react-router-dom';
import Lyric from './Lyric';
import { ShowLyric } from '../action/LyricAction';

const Album = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { id } = useParams();
    const { albumName, searchSongs } = location.state;
    const isShowLyric = useSelector(state => state.Lyric.isShow);

    const getSongs = async () => {
        const result = await getSongsApi();

        if (id === "favorite") {
            const Songs = JSON.parse(localStorage.getItem("Favorite"));
            dispatch(Set_Songs(Songs));
            dispatch(Set_Song(-1, Songs));
            dispatch(ShowLyric(isShowLyric, Songs[0]?.lyric));
        }
        else if (searchSongs.length !== 0) {
            dispatch(Set_Songs(searchSongs));
            dispatch(Set_Song(-1, searchSongs));
            dispatch(ShowLyric(isShowLyric, searchSongs[0]?.lyric));
        }
        else {
            const Songs = DataSongs.filter(o => o.albumId === id);
            dispatch(Set_Songs(Songs));
            dispatch(Set_Song(0, Songs));
            dispatch(ShowLyric(isShowLyric, Songs[0]?.lyric));
        }
    }

    useEffect(() => {
        getSongs();
    }, []);

    return (
        <>
            <div className="App">
                <Navbar albumName={albumName} />
                <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
                    <ListSongs height={isShowLyric ? "calc(100vh - 6rem - 20rem)" : ""} />
                    {isShowLyric && <Lyric />}
                </div>
                <Playing />
            </div>
        </>
    )
}

export default Album