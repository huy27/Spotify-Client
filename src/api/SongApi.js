import axios from "axios";


export const getSongsApi = async () => {
    const result = await axios.get('https://mocki.io/v1/3a7321ec-ba55-4c3c-9b27-59a922bfae56');
    return result.data;
}