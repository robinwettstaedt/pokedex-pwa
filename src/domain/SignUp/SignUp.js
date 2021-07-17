import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useHistory, withRouter, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import app from '../../utils/Firebase';
import {
  Wrapper,
  AuthWrapper,
  HeaderWrapper,
  Heading,
  HeaderText,
  Form,
  Label,
  Input,
  Button,
  AuthLink,
} from '../../components/AuthForm/styles/styles.js';
import AuthThemeChanger from '../../components/AuthForm/AuthThemeChanger/AuthThemeChanger';
import { ModalContext } from '../../contexts/ModalContext';

const SignUp = () => {
  const { setModalContent, setShowModal } = useContext(ModalContext);

  let history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        await app.auth().createUserWithEmailAndPassword(email, password);
        history.push('/');
      } catch (error) {
        setModalContent(
          <>
            There has been an issue with the Sign Up. Your password should be at
            least 6 characters long.
          </>
        );
        setShowModal(true);
      }
    },
    [history, email, password, setModalContent, setShowModal]
  );

  useEffect(() => {
    setModalContent(
      <>
        For convinience sake there is no need to enter your actual email address
        to register. Feel free to choose any random email and password for
        signing up, there is no validation as this is just a side project I
        created while learning React.
      </>
    );
    setShowModal(true);
  }, [setModalContent, setShowModal]);

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Wrapper>
      <AuthWrapper>
        <HeaderWrapper>
          <Heading>Robin's Pokédex</Heading>
          <HeaderText>
            Thanks for checking out my Pokédex Web App! <br />
            <br />
            After signing up you will be able to get information on the
            originial 151 Pokémon and mark which ones you have caught. Have fun!
          </HeaderText>
        </HeaderWrapper>
        <Form onSubmit={handleSignUp}>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            s
          />
          <Button type="submit">Sign Up</Button>
        </Form>
        <AuthThemeChanger />
        <AuthLink to="/login">Log In instead</AuthLink>
      </AuthWrapper>
    </Wrapper>
  );
};

export default withRouter(SignUp);
