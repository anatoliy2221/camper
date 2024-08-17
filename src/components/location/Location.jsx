import css from './Location.module.css';
import locationIcon from '../../assets/map-pin.svg';
const Location = () => {
    return (
        <div className={css.container}>
            <label className={css.label}>Location</label>
            <div className={css.locationInput}>
                <img src={locationIcon} alt="Location Icon" className={css.icon} />
                <p>Kyiv, Ukraine</p>
            </div>
        </div>
    );
};

export default Location;
