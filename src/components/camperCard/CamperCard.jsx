import styles from './CamperCard.module.css';

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
}) => {
    return (
        <div key={_id} className={styles.camperItem}>
            <div className={styles.camperImageContainer}>
                <img src={gallery[0]} alt={name} className={styles.camperImage} />
            </div>
            <div className={styles.camperInfo}>
                <div className={styles.camperHeader}>
                    <h2>{name}</h2>
                    <p className={styles.camperPrice}>€{price}.00</p>
                </div>
                <p className={styles.camperLocation}>{location}</p>
                <p className={styles.camperRating}>
                    ⭐ {rating} ({reviews.length} reviews)
                </p>
                <p className={styles.camperDescription}>
                    {description.split(' ').slice(0, 10).join(' ')}...
                </p>
                <div className={styles.camperFeatures}>
                    <p>{`${adults} adults`}</p>
                    <p>{transmission}</p>
                    <p>{engine}</p>
                    <p>{details.kitchen ? 'Kitchen' : 'No Kitchen'}</p>
                    <p>{`${details.beds} beds`}</p>
                    <p>{details.airConditioner ? 'AC' : 'No AC'}</p>
                </div>
                <button className={styles.showMore}>Show more</button>
            </div>
        </div>
    );
};

export default CamperCard;
