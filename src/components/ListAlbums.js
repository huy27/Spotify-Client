import { Autocomplete, Button, TextField } from '@mui/material';
// import Albums from './../data/albums.json';
// import DataSongs from './../data/songs.json';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAlbumsApi } from '../api/AlbumApi';
import { getSongsByName } from './../api/SongApi';

const ListAlbums = () => {
    let navigate = useNavigate();
    const [searchSongs, setSearchSongs] = useState([]);
    const [Albums, setAlbums] = useState([]);
    const [DataSongs, setDataSongs] = useState([]);

    const getAlbums = async () => {
        const albums = await getAlbumsApi();
        setAlbums(albums);
    }

    useEffect(() => {
        getAlbums();
    }, [])

    const handSearchSongs = (songs) => {
        setSearchSongs(songs);
    }

    const findSongByName = async (name) => {
        const songs = await getSongsByName(name);
        const data = songs.filter((el) => {
            return !searchSongs.find(({ id }) => el.id === id)
        })
        setDataSongs(data);
    }

    const SearchSongs = () => {
        navigate("/search", { state: { searchSongs: searchSongs } });
    }
    return (
        <div className="container-card">
            <div className="bg-search">
                <Autocomplete
                    freeSolo
                    multiple
                    variant="outlined"
                    limitTags={0}
                    id="multiple-limit-tags"
                    options={DataSongs}
                    getOptionLabel={(option) => option.name}
                    sx={{ width: "80%" }}
                    onInputChange={(event, value) => findSongByName(event.target.value)}
                    onChange={(event, value) => handSearchSongs(value)}
                    className="container-search"
                    renderInput={(params) => (
                        <>
                            <TextField
                                {...params}
                                size="small"
                                placeholder="Nhập tên bài hát"
                            />
                        </>)
                    }
                    renderOption={(props, option) => {
                        return (
                            <>
                                <li {...props} style={{ display: 'flex' }}>
                                    <div style={{ width: '90%' }}>{option.name} - {option.author}</div>
                                    <div><img style={{ width: '40px', height: '40px' }} src={option.image} alt={option.name} /></div>
                                </li>
                                <hr />
                            </>
                        )
                    }}
                    ListboxProps={
                        {
                            style: {
                                maxHeight: '150px',
                                border: '1px solid white',
                            }
                        }
                    }
                />
                <div style={{ backgroundColor: '#e7e7e7' }}>
                    <Button disabled={searchSongs.length === 0} color="primary" onClick={SearchSongs}>
                        Tìm
                    </Button>
                </div>
            </div>
            <ul className="cards">
                {Albums.map(album => (
                    <li key={album.id}>
                        <Link to={`/album/${album.id}`} className="card" state={{ albumName: `${album.name}` }}>
                            <img src={`${album.backgroundImageUrl}`} className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <img className="card__thumb" src={`${album.backgroundImageUrl}`} alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title"><strong>{album.name}</strong></h3>
                                        <span className="card__status">{album.created_at}</span>
                                    </div>
                                </div>
                                <p className="card__description">{album.description}</p>
                            </div>
                        </Link>
                    </li>
                ))}
                <li>
                    {
                        localStorage.getItem('Favorite') &&
                        <Link to={`/album/favorite`} className="card" state={{ albumName: `Sở thích` }}>
                            <img src={`https://img-9gag-fun.9cache.com/photo/aVxY4y8_460s.jpg`} className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <img className="card__thumb" src={`https://img-9gag-fun.9cache.com/photo/aVxY4y8_460s.jpg`} alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title"><strong>Sở thích</strong></h3>
                                    </div>
                                </div>
                                <p className="card__description">Sở thích cá nhân</p>
                            </div>
                        </Link>
                    }

                </li>
            </ul>
        </div >
    )
}

export default ListAlbums