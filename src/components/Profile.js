import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function Profile() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <p> This is the profile of {currentUser.uid + currentUser.email}</p>
    </div>
  );
}

export default Profile;
