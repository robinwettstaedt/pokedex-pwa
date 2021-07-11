import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import {
  ModalBackground,
  ModalContainer,
  ModalButton,
  ModalContent,
} from './styles/ModalElements';

const Modal = () => {
  const { showModal, setShowModal, modalContent } = useContext(ModalContext);
  return (
    <>
      <ModalBackground />
      <ModalContainer>
        <ModalContent>{modalContent}</ModalContent>
        <ModalButton onClick={() => setShowModal(!showModal)}>
          Close
        </ModalButton>
      </ModalContainer>
    </>
  );
};

export default Modal;
