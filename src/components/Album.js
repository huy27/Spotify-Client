import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import DataSongs from "./../data/songs.json";
import { useLocation, useParams } from "react-router-dom";
import { getAlbumByIdApi } from "../api/AlbumApi";
import { ShowLyric } from "../reducer/LyricSlice";
import { SetSongs } from "../reducer/SongsSlice";
import { getSongsByAlbumIdApi } from "./../api/SongApi";
import ListSongs from "./ListSongs";
import Lyric from "./Lyric";
import Navbar from "./Navbar";
import Playing from "./Playing";

const Album = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { id } = useParams();
    const [ albumName, setAlbumName ] = useState("");
    const isShowLyric = useSelector((state) => state.Lyric.isShow);

    const getSongs = async () => {
        let Songs = [];
        if (id === "favorite") {
            Songs = JSON.parse(localStorage.getItem("Favorite"));
            setAlbumName("Sở thích");
        } else if (!id && location) {
            Songs = [...location.state.searchSongs];
            setAlbumName("SearchSongs");
        } else {
            Songs = await getSongsByAlbumIdApi(id);
            const album = await getAlbumByIdApi(id);
            setAlbumName(album.name);
        }
        if (Songs) {
            dispatch(SetSongs(Songs));
            dispatch(ShowLyric({ isShow: false, lyric: Songs[0]?.lyric }));
        }
    };

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
    );
};

export default Album;
