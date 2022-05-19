import { SETSONG } from './../action/SongAction';


const song =
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


const SongReducer = (state = song, action) => {
    switch (action.type) {
        case SETSONG:
            return action.payload
        default:
            return { ...state }
    }
}

export default SongReducer