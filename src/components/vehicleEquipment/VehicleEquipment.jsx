import { useState } from "react";
import ac from '../../assets/ac.svg';
import automatic from '../../assets/akp.svg';
import kitchen from '../../assets/kitch.svg';
import tv from '../../assets/tv.svg';
import shower from '../../assets/shower.svg';
import css from './VehicleEquipment.module.css';

const VehicleEquipment = () => {
    const [selectedEquipment, setSelectedEquipment] = useState([]);

    const equipmentOptions = [
        { id: 'ac', src: ac, label: 'AC' },
        { id: 'automatic', src: automatic, label: 'Automatic' },
        { id: 'kitchen', src: kitchen, label: 'Kitchen' },
        { id: 'tv', src: tv, label: 'TV' },
        { id: 'shower', src: shower, label: 'Shower/WC' },
    ];

    const handleItemClick = (id) => {
        setSelectedEquipment(prevState =>
            prevState.includes(id)
                ? prevState.filter(item => item !== id)
                : [...prevState, id]
        );
    };

    return (
        <>
            <p>Vehicle equipment</p>
            <ul className={css.equipmentList}>
                {equipmentOptions.map(equipment => (
                    <li
                        key={equipment.id}
                        className={`${css.equipmentItem} ${selectedEquipment.includes(equipment.id) ? css.selected : ''}`}
                        onClick={() => handleItemClick(equipment.id)}
                    >
                        <img src={equipment.src} alt={equipment.label} />
                        <p>{equipment.label}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default VehicleEquipment;
