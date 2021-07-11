import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';
import { ModalContext } from '../../../../contexts/ModalContext';
import Modal from '../../../../components/Modal/Modal';
import { Wrapper, ActionWrapper } from './styles/styles';

function ChangeUsername() {
  const { currentUser } = useContext(AuthContext);
  const { showModal, setShowModal } = useContext(ModalContext);
  const [newUsername, setNewUsername] = useState('');

  const modalContent = <div>Ey jo miene freunde</div>;

  const handleChange = (e) => {
    setNewUsername(e.target.value);
  };

  const setUsername = async (e) => {
    e.preventDefault();
    try {
      setShowModal(true);
      await currentUser.updateProfile({
        displayName: newUsername,
      });
    } catch (error) {
      alert('There has been an error: ', error);
    }
  };

  return (
    <Wrapper>
      <ActionWrapper>
        <form onSubmit={setUsername}>
          <label>
            new desired username
            <input type="text" value={newUsername} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <Modal
          setShowModal={setShowModal}
          showModal={showModal}
          modalContent={modalContent}
        />
      </ActionWrapper>
    </Wrapper>
  );
}

export default ChangeUsername;
