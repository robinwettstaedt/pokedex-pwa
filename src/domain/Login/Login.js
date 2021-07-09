import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect, useHistory, Link } from 'react-router-dom';
import app from '../../utils/Firebase.js';
import { AuthContext } from '../../contexts/AuthContext';
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

const Login = () => {
  let history = useHistory();

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert('There has been an error: ', error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Wrapper>
      <AuthWrapper>
        <HeaderWrapper>
          <Heading>The Pokedex</Heading>
          <HeaderText>
            dfkdlsj fkdsf klfjskd ljfklsdf klseklf jsefes kljfkl sjfkljsl jfl k
            kew fjklefjk.
          </HeaderText>
        </HeaderWrapper>

        <Form onSubmit={handleLogin}>
          <Label for="email">Email</Label>

          <Input name="email" type="email" placeholder="Email" />
          <Label for="password">Password</Label>

          <Input name="password" type="password" placeholder="Password" />
          <Button type="submit">Log in</Button>
        </Form>
        <ThemeChanger />
        <AuthLink to="/signup">Sign up instead</AuthLink>
      </AuthWrapper>
    </Wrapper>
  );
};

export default withRouter(Login);
