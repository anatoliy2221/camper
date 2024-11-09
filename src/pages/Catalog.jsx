import { fetchCampers, getCampersPage } from '../redux/campers/operations';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CamperList from '../components/camperList/CamperList';
import Loader from '../components/loader/Loader';
import LoadMoreBtn from '../components/loadMoreBtn/LoadMoreBtn';
import {
    selectCampers,
    selectIsLoading,
    selectError,
    selectIsAllLoad,

} from '../redux/campers/selectors';

const Catalog = () => {
    const dispatch = useDispatch();

    const campers = useSelector(selectCampers);
    const isLoading = useSelector(selectIsLoading);
    const isAllLoad = useSelector(selectIsAllLoad);
    const error = useSelector(selectError);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    useEffect(() => {
        if (page > 1) dispatch(getCampersPage(page));
    }, [dispatch, page]);

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    return (
        <>
            {isLoading && <Loader />}
            {error && <p>There was an error fetching the campers data!</p>}
            {!campers.length && !isLoading && <p>Campers not found!</p>}

            {campers && <CamperList />}

            {!isAllLoad && (
                <LoadMoreBtn onClick={handleLoadMore} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Load More'}
                </LoadMoreBtn>
            )}
        </>
    );
};

export default Catalog;
