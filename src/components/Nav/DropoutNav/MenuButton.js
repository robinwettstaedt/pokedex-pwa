import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  /* color: ${(props) => props.theme.primaryFontColor}; */
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 30px;
  height: 30px;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

function MenuButton({ dropoutOpen, setDropoutOpen }) {
  const handleClick = () => {
    setDropoutOpen(!dropoutOpen);
  };

  return (
    <Wrapper onClick={handleClick}>
      {dropoutOpen ? (
        <FontAwesomeIcon icon={faTimesCircle} size="2x" />
      ) : (
        <FontAwesomeIcon icon={faBars} size="2x" />
      )}
    </Wrapper>
  );
}

export default MenuButton;
