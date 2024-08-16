import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';
import CamperCard from '../camperCard/CamperCard';

const CamperList = () => {
    const campers = useSelector(selectCampers);

    return (
        <>
            {!campers.length ? (
                <p>Campers data empty!</p>
            ) : (
                <ul>
                    {campers.map((camper) => (
                        <li key={camper._id}>
                            <CamperCard {...camper} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default CamperList;




