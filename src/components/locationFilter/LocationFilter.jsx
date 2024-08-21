
import locationIcon from '../../assets/map-pin.svg';

// const inputFormlocation = () => {
//     return (
//         <div className={css.container}>
//             <label className={css.label}> </label>
//                 <input className={css.locationInput} />
//                 <img src={locationIcon} alt="Location Icon" className={css.icon} />
//                 <p>Kyiv, Ukraine</p>

//             </label>
//         </div>
//     );
// };

// export default inputFormlocation;

import css from './LocationFilter.module.css';

const LocationFilter = ({ locationFilter, onLocationChange }) => {
    return (
        <>
            <label className={css.label}>Location </label>
            <div className={css.locationWrapper}>
                <input
                    type="text"
                    placeholder="City"
                    value={locationFilter}
                    onChange={(e) => onLocationChange(e.target.value)}
                    className={css.locationInput}
                />
                <img src={locationIcon} alt="Location Icon" className={css.icon} />
            </div>
        </>
    );
};

export default LocationFilter;