import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { Wrapper } from './styles/styles';

const ClosingButton = ({ setDropoutOpen }) => {
  const handleClick = () => {
    setDropoutOpen(false);
  };

  return (
    <Wrapper onClick={handleClick}>
      <FontAwesomeIcon icon={faTimesCircle} size="3x" onClick={handleClick} />
    </Wrapper>
  );
};

export default ClosingButton;
