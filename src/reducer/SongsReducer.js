import { SETSONGS } from './../action/SongsAction';


const songs = [
    {
        name: "",
        author: "",
        url: "",
        id: "",
        links: {
            images: [
                {
                    url: ""
                },
                {
                    url: ""
                }
            ]
        }
    }
]

const SongSReducer = (state = songs, action) => {
    switch (action.type) {
        case SETSONGS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return { ...state }
    }
}

export default SongSReducer