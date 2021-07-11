import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';
import { ModalContext } from '../../../../contexts/ModalContext';
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
  const { setModalContent, setShowModal } = useContext(ModalContext);

  const [newPassword, setNewPassword] = useState('');

  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };

  const changePassword = async (e) => {
    e.preventDefault();
    try {
      await currentUser.updatePassword(newPassword);
      setNewPassword('');
      setModalContent(<>Your Password has been updated successfully.</>);
      setShowModal(true);
    } catch {
      setNewPassword('');
      setModalContent(
        <>
          Please sign out and log in again. In order to change your password you
          must have signed in recently.
        </>
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
      </ActionWrapper>
    </Wrapper>
  );
}

export default ChangeUsername;
