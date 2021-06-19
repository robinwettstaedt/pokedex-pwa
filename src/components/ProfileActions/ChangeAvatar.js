import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { app } from '../../utils/Firebase';

function ChangeAvatar() {
  const { currentUser } = useContext(AuthContext);

  const onFileInput = async (e) => {
    try {
      const file = e.target.files[0];
      const storageRef = app.storage().ref().child('userImages');
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);

      const url = await fileRef.getDownloadURL();

      await currentUser.updateProfile({
        photoURL: url,
      });
    } catch (error) {
      alert('There has been an error: ', error);
    }
  };

  const restoreDefaultImage = async () => {
    try {
      await currentUser.updateProfile({
        photoURL: null,
      });
    } catch (error) {
      alert('There has been an error: ', error);
    }
  };
  return (
    <div>
      <input type="file" onChange={onFileInput} />
      <button onClick={restoreDefaultImage}>Delete my Avatar picture</button>
    </div>
  );
}

export default ChangeAvatar;
