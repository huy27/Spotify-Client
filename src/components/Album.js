
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import DataSongs from "./../data/songs.json";
import { useLocation, useParams } from 'react-router-dom';
import { Set_Song } from '../action/SongAction';
import { Set_Songs } from '../action/SongsAction';
import { ShowLyric } from '../reducer/LyricSlice';
import { getSongsByAlbumIdApi } from './../api/SongApi';
import ListSongs from './ListSongs';
import Lyric from './Lyric';
import Navbar from './Navbar';
import Playing from './Playing';

const Album = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { id } = useParams();
    const { albumName, searchSongs } = location.state;
    const isShowLyric = useSelector(state => state.Lyric.isShow);

    const getSongs = async () => {
        let Songs = [];
        if (id === "favorite") {
            Songs = JSON.parse(localStorage.getItem("Favorite"));
        }
        else if (!id && searchSongs.length !== 0) {
            Songs = [...searchSongs];
        }
        else {
            Songs = await getSongsByAlbumIdApi(id);
            
        }
        if(Songs){
            dispatch(Set_Songs(Songs));
            dispatch(Set_Song(-1, Songs));
            dispatch(ShowLyric({ isShow: isShowLyric, lyric: Songs[0]?.lyric }));
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