import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';
import { ModalContext } from '../../../../contexts/ModalContext';
import Modal from '../../../../components/Modal/Modal';
import {
  Wrapper,
  ActionWrapper,
  Form,
  Input,
  Button,
  Label,
  HeaderWrapper,
  HeaderText,
} from './styles/styles';

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
        <HeaderWrapper>
          <HeaderText>
            Enter your desired new Username below and hit submit to change it.
          </HeaderText>
        </HeaderWrapper>
        <Form onSubmit={setUsername}>
          <Label for="username">New Username</Label>
          <Input
            type="text"
            value={newUsername}
            placeholder="New Username"
            onChange={handleChange}
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
