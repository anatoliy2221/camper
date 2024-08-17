import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';

const FavoriteButton = ({ camperId }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);
    const isFavorite = favorites.includes(camperId);

    const handleClick = () => {
        if (isFavorite) {
            dispatch(removeFavorite(camperId));
        } else {
            dispatch(addFavorite(camperId));
        }
    };

    return (
        <button
            onClick={handleClick}
            style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
            }}
        >
            <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                stroke='gray'
                fill={isFavorite ? 'red' : 'white'}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        </button>
    );
};

export default FavoriteButton;





















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




// const FavoriteButton = () => {

//     return (
//         <>
//             <img src={heart} width={24} height={24}></img>
//         </>
//     );
// };

// export default FavoriteButton;