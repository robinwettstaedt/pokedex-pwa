import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl } from '@fortawesome/free-solid-svg-icons';
import { LinkWrapper } from './styles/styles';

const ListLink = ({ setDropoutOpen }) => {
  const handleClick = () => {
    setDropoutOpen(false);
  };

  return (
    <LinkWrapper to="/pokedex" onClick={handleClick}>
      <FontAwesomeIcon icon={faListOl} size="3x" />
    </LinkWrapper>
  );
};

export default ListLink;
