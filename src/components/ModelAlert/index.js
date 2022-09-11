import React from 'react';
import Modal from 'react-modal';
import './ModelAlert.css'
import Gif from '../../assets/images/gif-modal.svg';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '0.5rem',
      border: 'none',
    },
};

Modal.setAppElement('#root');

export const ModelAlert = ({modal}) => {

    return(
        <Modal
            isOpen={ modal }
            // onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={ 200 }
            overlayClassName='modal-fondo'
        >
            <div className='WrapperMAlert'>
                <img className='ImgModal' src={ Gif } />
                <p className='TextModal'>Cargando...</p>
            </div>

        </Modal>
    );
}