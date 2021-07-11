import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';
import { ModalContext } from '../../../../contexts/ModalContext';
import { Button, ActionWrapper, Wrapper } from './styles/styles';

function DeleteAccount() {
  const { currentUser } = useContext(AuthContext);
  const { setShowModal, setModalContent } = useContext(ModalContext);

  const deleteAccount = async () => {
    try {
      await currentUser.delete();
    } catch {
      setModalContent(
        <>
          Please sign out and log in again. In order to delete your account you
          must have signed in recently.
        </>
      );
      setShowModal(true);
    }
  };

  return (
    <>
      <Wrapper>
        <ActionWrapper>
          <Button onClick={deleteAccount}>Delete Account</Button>
        </ActionWrapper>
      </Wrapper>
    </>
  );
}

export default DeleteAccount;
