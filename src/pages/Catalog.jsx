import { useEffect, useState } from 'react';
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
import { CamperModal } from '../components/camperModal/camperModal';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

const Catalog = () => {
    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    const hasMore = useSelector(selectHasMore);
    const page = useSelector(selectPage);
    const navigate = useNavigate();
    const { camperId } = useParams();
    const limit = 4;

    const [showModal, setShowModal] = useState(false);
    const [selectedCamper, setSelectedCamper] = useState(null);

    const openModal = (camper) => {
        setSelectedCamper(camper);
        setShowModal(true);
        navigate(`/catalog/${camper._id}`);
    };

    const closeModal = () => {
        setSelectedCamper(null);
        setShowModal(false);
        navigate('/catalog');
    };

    useEffect(() => {
        dispatch(fetchCampers({ limit, page }));
    }, [dispatch, limit, page]);

    useEffect(() => {
        if (camperId) {
            const camper = campers.find(c => c._id === camperId);
            if (camper) {
                setSelectedCamper(camper);
                setShowModal(true);
            }
        }
    }, [camperId, campers]);

    const handleLoadMore = () => {
        dispatch(setPage(page + 1));
    };

    return (
        <>
            {error && <p>There was an error fetching the campers data!</p>}
            {isLoading && <Loader />}
            {!campers.length ? <p>Campers not found!</p> : <CamperList openModal={openModal} />}

            {hasMore && (
                <LoadMoreBtn onClick={handleLoadMore} disabled={isLoading}>
                    {isLoading ? 'Loading' : 'Load More'}
                </LoadMoreBtn>
            )}
            {showModal && <CamperModal selectedCamper={selectedCamper} modalIsOpen={showModal} closeModal={closeModal} />}
            <Outlet />
        </>
    );
};

export default Catalog;
