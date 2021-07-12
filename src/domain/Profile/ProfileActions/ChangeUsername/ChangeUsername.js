import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';
import { ModalContext } from '../../../../contexts/ModalContext';
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
  const [newUsername, setNewUsername] = useState('');
  const { setShowModal, setModalContent } = useContext(ModalContext);

  const handleChange = (e) => {
    setNewUsername(e.target.value);
  };

  const setUsername = async (e) => {
    e.preventDefault();
    try {
      setModalContent(<>Your Username has been changed!</>);
      setShowModal(true);
      await currentUser.updateProfile({
        displayName: newUsername,
      });
      setNewUsername('');
    } catch (error) {
      setModalContent(<>There has been an error!: {error}</>);
      setShowModal(true);
      setNewUsername('');
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
          <Label htmlFor="username">New Username</Label>
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
      </ActionWrapper>
    </Wrapper>
  );
}

export default ChangeUsername;
