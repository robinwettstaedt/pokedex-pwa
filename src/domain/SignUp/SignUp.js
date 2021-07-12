import React, { useState, useCallback, useContext } from 'react';
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
import ThemeChanger from '../../components/Nav/DropoutNav/DropoutElements/ThemeChanger.js';

const SignUp = () => {
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
        alert('There has been an error: ', error);
      }
    },
    [history, email, password]
  );
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
        <ThemeChanger />
        <AuthLink to="/login">Log In instead</AuthLink>
      </AuthWrapper>
    </Wrapper>
  );
};

export default withRouter(SignUp);
