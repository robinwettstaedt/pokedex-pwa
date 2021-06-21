import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import app from '../../utils/Firebase';

function Nav() {
  const [userImageURL, setUserImageURL] = useState();
  const { currentUser } = useContext(AuthContext);

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
    <div>
      <img src={userImageURL} height={30} alt="user" />
      <span> {currentUser.displayName}</span>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      <br />
      <Link to="/">Home </Link>
      <Link to="/profile">Profile </Link>
      <Link to="/pokedex">Pokedex </Link>
    </div>
  );
}

export default Nav;
