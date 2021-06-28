import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { AvatarWrapper, Username, AvatarImage } from './styles/styles';
import app from '../../../utils/Firebase';

function Avatar() {
  const { currentUser } = useContext(AuthContext);
  const [userImageURL, setUserImageURL] = useState();

  useEffect(() => {
    // getting the default profile image from the firebase storage
    const getUserImage = () => {
      app
        .storage()
        .ref()
        .child('userImages/defaultImage.png')
        .getDownloadURL()
        .then((url) => {
          setUserImageURL(url);
        });
    };

    if (currentUser.photoURL == null) {
      getUserImage();
    } else {
      setUserImageURL(currentUser.photoURL);
    }
  }, [currentUser.photoURL, currentUser]);

  return (
    <AvatarWrapper>
      <AvatarImage src={userImageURL} alt="user" />
      <Username to="/profile">{currentUser.displayName}</Username>
    </AvatarWrapper>
  );
}

export default Avatar;
