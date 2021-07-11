import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';
import { ModalContext } from '../../../../contexts/ModalContext';
import Modal from '../../../../components/Modal/Modal';
import {
  Wrapper,
  ActionWrapper,
  HeaderWrapper,
  HeaderText,
  Form,
  Label,
  Input,
  Button,
} from './styles/styles';

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
      setNewPassword('');
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
    <Wrapper>
      <ActionWrapper>
        <HeaderWrapper>
          <HeaderText>
            Enter your desired new Password below and hit submit to change it.
          </HeaderText>
        </HeaderWrapper>
        <Form onSubmit={changePassword}>
          <Label for="password">new desired password</Label>
          <Input
            type="password"
            name="password"
            value={newPassword}
            onChange={handleChange}
            placeholder="New Password"
          />
          <Button type="submit" value="Submit">
            Submit
          </Button>
        </Form>
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
