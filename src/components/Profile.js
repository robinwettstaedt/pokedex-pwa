import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import app from '../utils/Firebase';

function Profile() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <p> This is the profile of {currentUser.displayName}</p>
      <Link to="/profile/delete">Delete your Account</Link>
      <Link to="/profile/avatar">Change your Avatar Image</Link>
      <Link to="/profile/username">Change your Username</Link>
    </div>
  );
}

export default Profile;
