import axios from "axios";


export const getAlbumsApi = async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/Album`);
    return result.data;
}

export const getAlbumByIdApi = async (id) => {
    const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/Album/${id}`);
    return result.data;
}