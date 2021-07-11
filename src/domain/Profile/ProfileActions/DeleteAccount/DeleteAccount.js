import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';
import { ModalContext } from '../../../../contexts/ModalContext';
import Modal from '../../../../components/Modal/Modal';
import { Button, ActionWrapper, Wrapper } from './styles/styles';

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
    <Wrapper>
      <ActionWrapper>
        <Button onClick={deleteAccount}>Delete Account</Button>
        <Modal
          setShowModal={setShowModal}
          showModal={showModal}
          modalContent={modalContent}
        />
      </ActionWrapper>
    </Wrapper>
  );
}

export default DeleteAccount;
