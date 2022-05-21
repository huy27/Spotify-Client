
import { Link } from 'react-router-dom';
import Albums from './../data/albums.json'

const ListAlbums = () => {
    return (
        <div className="container-card">
            <ul className="cards">
                {Albums.map(album => (
                    <li key={album.id}>
                        <Link to={`/album/${album.id}`} className="card" state={{ albumName: `${album.name}` }}>
                            <img src={`${album.background_image_url}`} className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <img className="card__thumb" src={`${album.background_image_url}`} alt="" />
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
                        <Link to={`/album/favorite`} className="card" state={{ albumName: `Sở thich` }}>
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