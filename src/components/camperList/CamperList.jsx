import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';
import CamperCard from '../camperCard/CamperCard';
import VehicleType from '../vehicleType/VehicleType';
import styles from './CamperList.module.css';

const CamperList = () => {
    const campers = useSelector(selectCampers);

    return (
        <div className={styles.container}>
            <div className={styles.vehicleTypeContainer}>
                <VehicleType />
            </div>
            <div className={styles.camperListContainer}>
                {!campers.length ? (
                    <p>Campers data empty!</p>
                ) : (
                    <ul className={styles.camperList}>
                        {campers.map((camper) => (
                            <li key={camper._id} className={styles.camperListItem}>
                                <CamperCard {...camper} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CamperList;





