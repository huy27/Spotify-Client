import axios from "axios";


export const getSongsApi = async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/Music`);
    return result.data;
}

export const getSongsByAlbumIdApi = async (id) => {
    const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/Music/${id}`);
    return result.data;
}

export const getSongsByName = async (name) => {
    const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/Music/SearchByCondition?name=${name}`);
    return result.data;
}