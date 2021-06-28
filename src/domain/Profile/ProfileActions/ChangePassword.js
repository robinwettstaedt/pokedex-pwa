import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { ModalContext } from '../../../contexts/ModalContext';
import Modal from '../../../components/Modal/Modal';

function ChangeUsername() {
  const { currentUser } = useContext(AuthContext);
  const { showModal, setShowModal } = useContext(ModalContext);

  const [newPassword, setNewPassword] = useState('');
  const [modalContent, setModalContent] = useState(<p>default modalContent</p>);

  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };

  const changePassword = async (e) => {
    e.preventDefault();
    try {
      await currentUser.updatePassword(newPassword);
      setModalContent(
        <p>
          modalContent for confirmation: Your Password has been updated
          successfully.
        </p>
      );
      setShowModal(true);
    } catch {
      setModalContent(
        <p>
          modalContent for error: 'Please sign out and log in again. In order to
          delete your account you must have signed in recently. ',
        </p>
      );
      setShowModal(true);
    }
  };

  return (
    <div>
      <form onSubmit={changePassword}>
        <label>
          new desired password
          <input type="password" value={newPassword} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Modal
        setShowModal={setShowModal}
        showModal={showModal}
        modalContent={modalContent}
      />
    </div>
  );
}

export default ChangeUsername;
