import Modal from 'react-modal';
import css from './CamperModal.module.css';
import FeaturesModal from '../featuresModal/FeaturesModal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CamperModal = ({ selectedCamper, modalIsOpen, closeModal }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Camper Details"
        >
            <button className={css.closeButton} onClick={closeModal}>
                X
            </button>
            <FeaturesModal selectedCamper={selectedCamper} />
        </Modal>
    );
};
