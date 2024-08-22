import { Link, Outlet, useParams } from 'react-router-dom';
import css from './FeaturesModal.module.css';
import star from '../../assets/star.svg';
import pin from '../../assets/map-pin.svg';

const FeaturesModal = ({ selectedCamper }) => {
    const { camperId } = useParams();
    console.log(selectedCamper);

    if (!selectedCamper || selectedCamper._id !== camperId) return null;

    return (
        <div >
            <h2 className={css.camperModalTitle}>{selectedCamper.name}</h2>
            <div className={css.camperModalWrapper}>
                <img src={star} width={16} alt="star" />
                <p className={css.camperModalRating}>{selectedCamper.rating} ({selectedCamper.reviews.length} reviews)</p>
                <img src={pin} width={16} alt="map-pin" />
                <p className={css.camperModalLocation}>{selectedCamper.location}</p>
            </div>
            <p className={css.camperPrice}>€{selectedCamper.price}.00</p>
            <div className={css.gallery}>
                {selectedCamper.gallery.map((image, index) => (
                    <img key={index} src={image} alt={`${selectedCamper.name} ${index + 1}`} className={css.camperImage} />
                ))}
            </div>
            <p className={css.description}>Description: {selectedCamper.description}</p>
            <div className={css.tabs}>
                <Link to={`/catalog/${camperId}/features`} className={css.tabLink} state={{ selectedCamper }}>Features</Link>
                <Link to={`/catalog/${camperId}/reviews`} className={css.tabLink} state={{ selectedCamper }}>Reviews</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default FeaturesModal;
