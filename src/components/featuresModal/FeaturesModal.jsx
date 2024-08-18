import { Link, Outlet, useParams } from 'react-router-dom';
import css from './FeaturesModal.module.css';

const FeaturesModal = ({ selectedCamper }) => {
    const { camperId } = useParams();

    if (!selectedCamper || selectedCamper._id !== camperId) return null;

    const { name, price, rating, location, description, reviews, gallery } = selectedCamper;

    return (
        <div className={css.container}>
            <h2>{name}</h2>
            <p>Rating: {rating} ({reviews.length} reviews)</p>
            <p>Location: {location}</p>
            <p>Price: €{price}.00</p>
            <div className={css.gallery}>
                {gallery.map((image, index) => (
                    <img key={index} src={image} alt={`${name} ${index + 1}`} className={css.camperImage} />
                ))}
                <p>Description: {description}</p>
            </div>
            <div className={css.tabs}>
                <Link to={`/catalog/${camperId}/features`} className={css.tabLink}>Features</Link>
                <Link to={`/catalog/${camperId}/reviews`} className={css.tabLink}>Reviews</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default FeaturesModal;
