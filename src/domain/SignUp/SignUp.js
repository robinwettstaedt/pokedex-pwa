import React, { useState, useCallback, useContext } from 'react';
import { useHistory, withRouter, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import app from '../../utils/Firebase';

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
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" onChange={handleEmailChange} />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <p>You can change your username in the profile section of the app</p>
    </div>
  );
};

export default withRouter(SignUp);
