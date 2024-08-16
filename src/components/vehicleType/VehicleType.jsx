import { useState } from 'react';
import vanImage from '../../assets/Van.svg';
import fullyIntegImage from '../../assets/Fully.svg';
import alcoveImage from '../../assets/Alcove.svg';
import css from './VehicleType.module.css'; // Імпорт модульного CSS

const VehicleType = () => {
    const [vehicleType, setVehicleType] = useState('');

    return (
        <>
            <p>Vehicle type</p>
            <div className={css.vehicleTypeContainer}>
                <label className={vehicleType === 'van' ? css.selected : ''}>
                    <input
                        type="radio"
                        name="vehicleType"
                        value="van"
                        checked={vehicleType === "van"}
                        onChange={() => setVehicleType('van')}
                    />
                    <div>
                        <img src={vanImage} alt="Van" />
                        <p>Van</p>
                    </div>
                </label>
                <label className={vehicleType === 'fullyInteg' ? css.selected : ''}>
                    <input
                        type="radio"
                        name="vehicleType"
                        value="fullyInteg"
                        checked={vehicleType === "fullyInteg"}
                        onChange={() => setVehicleType('fullyInteg')}
                    />
                    <div>
                        <img src={fullyIntegImage} alt="Fully Integrated" />
                        <p>Fully Integrated</p>
                    </div>
                </label>
                <label className={vehicleType === 'alcove' ? css.selected : ''}>
                    <input
                        type="radio"
                        name="vehicleType"
                        value="alcove"
                        checked={vehicleType === "alcove"}
                        onChange={() => setVehicleType('alcove')}
                    />
                    <div>
                        <img src={alcoveImage} alt="Alcove" />
                        <p>Alcove</p>
                    </div>
                </label>
            </div>
        </>
    );
}

export default VehicleType;

