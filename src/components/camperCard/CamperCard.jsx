import css from './CamperCard.module.css';
import star from '../../assets/star.svg';
import pin from '../../assets/map-pin.svg';
import adult from '../../assets/adult.svg';
import transmis from '../../assets/akp.svg';
import patrol from '../../assets/patrol.svg';
import kitchen from '../../assets/kitch.svg';
import beds from '../../assets/beds.svg';
import airConditioner from '../../assets/ac.svg';

import FavoriteButton from '../favoriteButton/FavoriteButton';

const CamperCard = ({
    _id,
    gallery,
    name,
    price,
    location,
    reviews,
    rating,
    description,
    adults,
    transmission,
    engine,
    details,
    openModal,
}) => {
    return (
        <div key={_id} className={css.camperItem}>
            <div className={css.camperImageContainer}>
                <img src={gallery[0]} alt={name} className={css.camperImage} />
            </div>
            <div className={css.camperInfo}>
                <div className={css.camperHeader}>
                    <p className={css.camperName}>{name}</p>
                    <p className={css.camperPrice}>€{price}.00</p>
                    <FavoriteButton className={css.camperFavorite} camperId={_id} />
                </div>
                <div className={css.camperWrapper}>
                    <img src={star} width={16} alt="star" />
                    <p className={css.camperRating}>
                        {rating} ({reviews.length} reviews)
                    </p>
                    <img src={pin} width={16} alt="map-pin" />
                    <p className={css.camperLocation}>{location}</p>
                </div>
                <p className={css.camperDescription}>
                    {description.split(' ').slice(0, 10).join(' ')}...
                </p>
                <ul className={css.camperFeatures}>
                    <li className={css.camperFeaturesItem}>
                        <img src={adult}></img>
                        {`${adults} adults`}</li>
                    <li className={css.camperFeaturesItem}><img src={transmis}></img>{transmission}</li>
                    <li className={css.camperFeaturesItem}><img src={patrol}></img>{engine}</li>
                    <li className={css.camperFeaturesItem}><img src={kitchen}></img>{details.kitchen ? 'Kitchen' : 'No Kitchen'}</li>
                    <li className={css.camperFeaturesItem}><img src={beds}></img>{`${details.beds} beds`}</li>
                    <li className={css.camperFeaturesItem}><img src={airConditioner}></img>{details.airConditioner ? 'AC' : 'No AC'}</li>
                </ul>
                <button className={css.showMore} onClick={() => openModal({
                    _id,
                    name,
                    price,
                    rating,
                    location,
                    adults,
                    engine,
                    transmission,
                    description,
                    reviews,
                    details,
                    gallery
                })}>Show more</button>
            </div>
        </div>
    );
};

export default CamperCard;
