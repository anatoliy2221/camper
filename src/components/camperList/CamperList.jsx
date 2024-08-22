import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';
import CamperCard from '../camperCard/CamperCard';
import FilterBar from '../filterBar/FilterBar.jsx';
import css from './CamperList.module.css';


const CamperList = ({ openModal }) => {
  const campers = useSelector(selectCampers);

  return (
    <div className={css.contentContainer}>
      <div className={css.vehicleTypeContainer}>
        <FilterBar />
      </div>
      <div className={css.camperListContainer}>
        {!campers.length ? (
          <p>Campers data empty!</p>
        ) : (
          <ul className={css.camperList}>
            {campers.map((camper) => (
              <li key={camper._id} className={css.camperListItem}>
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
