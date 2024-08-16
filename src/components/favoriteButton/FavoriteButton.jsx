// import { useDispatch, useSelector } from 'react-redux';
// import { addFavorite, removeFavorite } from '../../redux/favorites/slice';
// import { selectFavorites } from '../../redux/favorites/selectors';

// const FavoriteButton = ({ camperId }) => {
//     const dispatch = useDispatch();
//     const favorites = useSelector(selectFavorites);

//     const isFavorite = favorites.includes(camperId);

//     const handleClick = () => {
//         console.log('Camper ID:', camperId);
//         if (isFavorite) {
//             dispatch(removeFavorite(camperId));
//         } else {
//             dispatch(addFavorite(camperId));
//         }
//     };

//     return (
//         <button onClick={handleClick}>
//             {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
//         </button>
//     );
// };

// export default FavoriteButton;

import heart from '../../assets/heart.svg';


const FavoriteButton = () => {

    return (
        <>
            <img src={heart} width={24} height={24}></img>
        </>
    );
};

export default FavoriteButton;