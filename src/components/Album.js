
import Navbar from './Navbar';
import ListSongs from './ListSongs';
import Playing from './Playing';
import { useDispatch } from 'react-redux';
import { getSongsApi } from './../api/SongApi';
import { Set_Songs } from '../action/SongsAction';
import { Set_Song } from '../action/SongAction';
import { useEffect } from 'react';
import DataSongs from "./../data/songs.json";
import { useLocation, useParams } from 'react-router-dom';

const Album = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { id } = useParams();
    const { albumName } = location.state;

    const getSongs = async () => {
        const result = await getSongsApi();

        if(id === "favorite"){
            const Songs = JSON.parse(localStorage.getItem("Favorite"));
            console.log(Songs);
            dispatch(Set_Songs(Songs));
            dispatch(Set_Song(0, Songs));
        }
        else{
            const Songs = DataSongs.filter(o => o.albumId === id);
            dispatch(Set_Songs(Songs));
            dispatch(Set_Song(0, Songs));
        }        
    }

    useEffect(() => {
        getSongs();
    }, []);

    return (
        <>
            <div className="App">
                <Navbar albumName={albumName}/>
                <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
                    <ListSongs />
                </div>
                <Playing />
            </div>
        </>
    )
}

export default Album