import Modal from 'react-modal';
import css from './CamperModal.module.css';
import FeaturesModal from '../featuresModal/FeaturesModal';
import closeBtn from '../../assets/closeBtn.svg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '982px',
    borderRadius: '20px',
    padding: '40px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFFFFF'
  },
};

Modal.setAppElement('#root');

export const CamperModal = ({ selectedCamper, closeModal }) => {
  return (
    <Modal
      isOpen={!!selectedCamper}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Camper Details"
    >
      <button className={css.closeButton} onClick={closeModal}>
        <img src={closeBtn} width={32}></img>
      </button>
      <FeaturesModal selectedCamper={selectedCamper} />
    </Modal>
  );
};
