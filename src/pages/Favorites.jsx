import { useSelector } from 'react-redux';
import CamperCard from '../components/camperCard/CamperCard';
import { selectCampers } from '../redux/campers/selectors';
import { selectFavorites } from '../redux/favorites/selectors';

const Favorites = () => {
    const favorites = useSelector(selectFavorites);
    const campers = useSelector(selectCampers);

    if (!campers || !favorites) {
        return <p>Loading...</p>;
    }

    const favoriteCampers = campers.filter((camper) =>
        favorites.includes(camper._id)
    );

    if (favoriteCampers.length === 0) {
        return <p>No favorites yet!</p>;
    }

    return (
        <div className="favorite-campers">
            {favoriteCampers.map((camper) => (
                <CamperCard key={camper._id} {...camper} />
            ))}
        </div>
    );
};

export default Favorites;