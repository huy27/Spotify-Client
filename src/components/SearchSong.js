
import { Autocomplete, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSongsByName } from './../api/SongApi';

const SearchSongs = () => {
    let navigate = useNavigate();
    const [searchSongs, setSearchSongs] = useState([]);
    const [DataSongs, setDataSongs] = useState([]);

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
        <>
            <Autocomplete
                freeSolo
                multiple
                noOptionsText="Không tìm thấy"
                variant="outlined"
                limitTags={0}
                id="multiple-limit-tags"
                options={DataSongs}
                getOptionLabel={(option) => option ? option.name : 'unavailable'}
                filterOptions={(options) => options}
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
                        <div key={option.id}>
                            <li {...props} style={{ display: 'flex' }}>
                                <div style={{ width: '90%' }}>{option.name} - {option.author}</div>
                                <div><img style={{ width: '40px', height: '40px' }} src={option.image} alt={option.name} /></div>
                            </li>
                            <hr />
                        </div>
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
        </>
    )
}

export default SearchSongs