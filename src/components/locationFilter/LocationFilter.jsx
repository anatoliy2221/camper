import locationIcon from '../../assets/map-pin.svg';

import css from './LocationFilter.module.css';

const LocationFilter = () => {
    return (
        <>
            <label className={css.label}>Location </label>
            <div className={css.locationWrapper}>
                <input
                    type="text"
                    placeholder="City"
                    // value={locationFilter}
                    // onChange={(e) => onLocationChange(e.target.value)}
                    className={css.locationInput}
                />
                <img src={locationIcon} alt="Location Icon" className={css.icon} />
            </div>
        </>
    );
};

export default LocationFilter;