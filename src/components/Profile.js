import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import app from '../utils/Firebase';

function Profile() {
  const { currentUser } = useContext(AuthContext);

  const onFileInput = (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref().child('userImages');
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log('uploaded file', file.name);
    });
  };

  const uploadSubmit = () => {};
  return (
    <div>
      <form onSubmit={uploadSubmit}>
        <input type="file" onChange={onFileInput} />
        <input type="submit" />
      </form>
      <p> This is the profile of {currentUser.uid + currentUser.email}</p>
    </div>
  );
}

export default Profile;
