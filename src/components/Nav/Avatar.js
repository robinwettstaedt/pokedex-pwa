import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../../contexts/SearchContext';
import SearchButton from './SearchButton';
import SearchBar from './SearchBar';
import { AuthContext } from '../../contexts/AuthContext';
import app from '../../utils/Firebase';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background: ${(props) => props.theme.primaryBackgroundColor};

  height: 40px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const AvatarImage = styled.img`
  height: 32px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const Username = styled(Link)`
  color: ${(props) => props.theme.primaryFontColor};
  padding-left: 0.5rem;
  text-decoration: none;
`;

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
    <Wrapper>
      <AvatarImage src={userImageURL} alt="user" />
      <Username to="/profile">{currentUser.displayName}</Username>
    </Wrapper>
  );
}

export default Avatar;
