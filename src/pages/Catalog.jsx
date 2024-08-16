import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CamperList from '../components/camperList/CamperList';
import Loader from '../components/loader/Loader';
import LoadMoreBtn from '../components/loadMoreBtn/LoadMoreBtn';
import { fetchCampers } from '../redux/campers/operations';
import {
    selectCampers,
    selectError,
    selectIsLoading,
    selectHasMore,
    selectPage,
} from '../redux/campers/selectors';
import { setPage } from '../redux/campers/slice';


const Catalog = () => {
    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    const hasMore = useSelector(selectHasMore);
    const page = useSelector(selectPage);
    const limit = 4;

    useEffect(() => {
        dispatch(fetchCampers({ limit, page }));
    }, [dispatch, limit, page]);

    const handleLoadMore = () => {
        dispatch(setPage(page + 1));
    };

    return (
        <>
            {error && <p>There was an error fetching the campers data!</p>}
            {isLoading && <Loader />}
            {!campers.length ? <p>Campers not found!</p> : <CamperList />}

            {hasMore && (
                <LoadMoreBtn onClick={handleLoadMore} disabled={isLoading}>
                    {isLoading ? 'Loading' : 'Load More'}
                </LoadMoreBtn>
            )}
        </>
    );
};

export default Catalog;
