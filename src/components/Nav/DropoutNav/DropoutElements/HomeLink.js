import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { LinkWrapper } from './styles/styles';

const HomeLink = ({ setDropoutOpen }) => {
  const handleClick = () => {
    setDropoutOpen(false);
  };

  return (
    <LinkWrapper to="/" onClick={handleClick}>
      <FontAwesomeIcon icon={faHome} size="3x" />
    </LinkWrapper>
  );
};

export default HomeLink;
