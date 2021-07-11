import React, { useState } from 'react';

export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(<> </>);

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        modalContent,
        setModalContent,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
