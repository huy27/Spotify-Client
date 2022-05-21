
import { useSelector } from 'react-redux';
import parse from "html-react-parser";

const Lyric = () => {
    const lyric = useSelector(state => state.Lyric);

    return (
        <div className="col-span-3 overflow-auto container-lyric">
            {parse(lyric.lyric)}
        </div>
    )
}

export default Lyric