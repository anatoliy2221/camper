import { Link, Outlet, useParams } from 'react-router-dom';
import css from './FeaturesModal.module.css';

const FeaturesModal = ({ selectedCamper }) => {
    const { camperId } = useParams();

    if (!selectedCamper || selectedCamper._id !== camperId) return null;

    return (
        <div className={css.container}>
            <h2>{selectedCamper.name}</h2>
            <p>Rating: {selectedCamper.rating} ({selectedCamper.reviews.length} reviews)</p>
            <p>Location: {selectedCamper.location}</p>
            <p>Price: €{selectedCamper.price}.00</p>
            <div className={css.gallery}>
                {selectedCamper.gallery.map((image, index) => (
                    <img key={index} src={image} alt={`${selectedCamper.name} ${index + 1}`} className={css.camperImage} />
                ))}
            </div>
            <p className={css.description}>Description: {selectedCamper.description}</p>
            <div className={css.tabs}>
                <Link to={`/catalog/${camperId}/features`} className={css.tabLink}>Features</Link>
                <Link to={`/catalog/${camperId}/reviews`} className={css.tabLink}>Reviews</Link>
            </div>
            <Outlet context={selectedCamper} />
        </div>
    );
};

export default FeaturesModal;
