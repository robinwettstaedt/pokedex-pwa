import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';
import { ModalContext } from '../../../../contexts/ModalContext';
import Modal from '../../../../components/Modal/Modal';

function DeleteAccount() {
  const { currentUser } = useContext(AuthContext);
  const { showModal, setShowModal } = useContext(ModalContext);

  const modalContent = (
    <p>
      Please sign out and log in again. In order to delete your account you must
      have signed in recently.
    </p>
  );

  const deleteAccount = async () => {
    try {
      await currentUser.delete();
    } catch {
      setShowModal(true);
    }
  };

  return (
    <div>
      <button onClick={deleteAccount}>Delete Account</button>
      <Modal
        setShowModal={setShowModal}
        showModal={showModal}
        modalContent={modalContent}
      />
      ;
    </div>
  );
}

export default DeleteAccount;
