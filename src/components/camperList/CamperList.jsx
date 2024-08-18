import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';
import CamperCard from '../camperCard/CamperCard';

import styles from './CamperList.module.css';
import FilterBar from '../filterBar/filterBar';

const CamperList = ({ openModal }) => {
  const campers = useSelector(selectCampers);

  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.vehicleTypeContainer}>
        <FilterBar />
      </div>
      <div className={styles.camperListContainer}>
        {!campers.length ? (
          <p>Campers data empty!</p>
        ) : (
          <ul className={styles.camperList}>
            {campers.map((camper) => (
              <li key={camper._id} className={styles.camperListItem}>
                <CamperCard {...camper} openModal={openModal} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CamperList;
