import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import app from '../utils/Firebase';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <h1>Home</h1>
      {currentUser && <p>currentuser email: {currentUser.email}</p>}
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      <Link to="/profile">visit profile</Link>
    </>
  );
};

export default Home;
