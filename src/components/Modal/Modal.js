import React from 'react';
import { ModalContainer } from './styles/ModalElements';

const Modal = ({ showModal, setShowModal, modalContent }) => {
  return (
    <div>
      {showModal ? (
        <ModalContainer>
          {modalContent}
          <button onClick={() => setShowModal(!showModal)}>Close</button>
        </ModalContainer>
      ) : null}
    </div>
  );
};

export default Modal;
