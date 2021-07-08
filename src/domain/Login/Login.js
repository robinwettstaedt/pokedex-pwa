import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect, useHistory, Link } from 'react-router-dom';
import app from '../../utils/Firebase.js';
import { AuthContext } from '../../contexts/AuthContext';
import {
  Wrapper,
  LoginWrapper,
  HeaderWrapper,
  Heading,
  HeaderText,
  Form,
  Label,
  Input,
} from '../../components/AuthForm/styles/styles.js';

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
      <LoginWrapper>
        <HeaderWrapper>
          <Heading>The Pokedex</Heading>
          <HeaderText>
            This is a ajldk lk djalkdjaife c lkj flwead kjad kjwadd klac klajd
            kwd wai ziljil cjailw
          </HeaderText>
        </HeaderWrapper>

        <Form onSubmit={handleLogin}>
          <Label for="email">Email</Label>

          <Input name="email" type="email" placeholder="Email" />
          <Label for="password">Password</Label>

          <Input name="password" type="password" placeholder="Password" />
          <button type="submit">Log in</button>
        </Form>
        <Link to="/signup">Sign up instead</Link>
      </LoginWrapper>
    </Wrapper>
  );
};

export default withRouter(Login);
