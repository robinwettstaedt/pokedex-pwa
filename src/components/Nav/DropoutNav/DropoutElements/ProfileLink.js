import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LinkWrapper } from './styles/styles';

const ProfileLink = ({ setDropoutOpen }) => {
  const handleClick = () => {
    setDropoutOpen(false);
  };

  return (
    <LinkWrapper to="/profile" onClick={handleClick}>
      <FontAwesomeIcon icon={faUser} size="3x" />
    </LinkWrapper>
  );
};

export default ProfileLink;
