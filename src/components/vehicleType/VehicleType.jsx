import { useState } from 'react';
import vanImage from '../../assets/Van.svg';
import fullyIntegImage from '../../assets/Fully.svg';
import alcoveImage from '../../assets/Alcove.svg';
import css from './VehicleType.module.css';

const VehicleType = () => {
    const [vehicleType, setVehicleType] = useState('');

    return (
        <>
            <p>Vehicle type</p>
            <div className={css.vehicleTypeContainer}>
                <label
                    className={`${css.label} ${vehicleType === 'van' ? css.selected : ''}`}
                >
                    <input
                        type="radio"
                        name="vehicleType"
                        value="van"
                        checked={vehicleType === 'van'}
                        onChange={() => setVehicleType('van')}
                    />
                    <img src={vanImage} alt="Van" />
                    <p>Van</p>
                </label>
                <label
                    className={`${css.label} ${vehicleType === 'fullyInteg' ? css.selected : ''}`}
                >
                    <input
                        type="radio"
                        name="vehicleType"
                        value="fullyInteg"
                        checked={vehicleType === 'fullyInteg'}
                        onChange={() => setVehicleType('fullyInteg')}
                    />
                    <img src={fullyIntegImage} alt="Fully Integrated" />
                    <p>Fully Integrated</p>
                </label>
                <label
                    className={`${css.label} ${vehicleType === 'alcove' ? css.selected : ''}`}
                >
                    <input
                        type="radio"
                        name="vehicleType"
                        value="alcove"
                        checked={vehicleType === 'alcove'}
                        onChange={() => setVehicleType('alcove')}
                    />
                    <img src={alcoveImage} alt="Alcove" />
                    <p>Alcove</p>
                </label>
            </div>
        </>
    );
};

export default VehicleType;
