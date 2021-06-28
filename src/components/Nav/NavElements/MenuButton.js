import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MenuButtonWrapper } from './styles/styles';

function MenuButton({ dropoutOpen, setDropoutOpen }) {
  const handleClick = () => {
    setDropoutOpen(!dropoutOpen);
  };

  return (
    <MenuButtonWrapper onClick={handleClick}>
      {dropoutOpen ? (
        <FontAwesomeIcon icon={faTimesCircle} size="2x" />
      ) : (
        <FontAwesomeIcon icon={faBars} size="2x" />
      )}
    </MenuButtonWrapper>
  );
}

export default MenuButton;
