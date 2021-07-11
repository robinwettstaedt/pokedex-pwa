import React, { useState, useContext, useRef } from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';
import { ModalContext } from '../../../../contexts/ModalContext';
import Modal from '../../../../components/Modal/Modal';
import app from '../../../../utils/Firebase';
import { ActionWrapper, Wrapper, FileInput, Button } from './styles/styles';

function ChangeAvatar() {
  const { currentUser } = useContext(AuthContext);
  const { showModal, setShowModal } = useContext(ModalContext);
  const [modalContent, setModalContent] = useState(<p>default modalContent</p>);
  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  const onFileInput = async (e) => {
    try {
      const file = e.target.files[0];
      const storageRef = app.storage().ref().child('userImages');
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);

      const url = await fileRef.getDownloadURL();

      await currentUser.updateProfile({
        photoURL: url,
      });
      setModalContent(
        <p>
          Your Avatar Image has been updated! Move to another page to see the
          changes.
        </p>
      );
      setShowModal(true);
    } catch {
      setModalContent(
        <p>
          There has been an issue with the Avatar change. Please relog and try
          again.
        </p>
      );
      setShowModal(true);
    }
  };

  const restoreDefaultImage = async () => {
    try {
      await currentUser.updateProfile({
        photoURL: null,
      });

      setModalContent(
        <p>
          Your Avatar Image has been updated to the default! Move to another
          page to see the changes.
        </p>
      );
      setShowModal(true);
    } catch (error) {
      setModalContent(
        <p>
          There has been an issue with the Avatar change. Please relog and try
          again.
        </p>
      );
      setShowModal(true);
    }
  };
  return (
    <Wrapper>
      <ActionWrapper>
        <FileInput ref={hiddenFileInput} type="file" onChange={onFileInput} />
        <Button onClick={handleClick}>Choose File</Button>
        <Button isBottom="true" onClick={restoreDefaultImage}>
          Delete My Picture
        </Button>
        <Modal
          setShowModal={setShowModal}
          showModal={showModal}
          modalContent={modalContent}
        />
      </ActionWrapper>
    </Wrapper>
  );
}

export default ChangeAvatar;
