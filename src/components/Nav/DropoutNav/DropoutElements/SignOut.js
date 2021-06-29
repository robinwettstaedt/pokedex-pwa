import React from 'react';
import { Wrapper } from './styles/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import app from '../../../../utils/Firebase';

const SignOut = () => {
  const handleClick = () => {
    app.auth().signOut();
  };

  return (
    <Wrapper>
      <FontAwesomeIcon icon={faSignOutAlt} size="3x" onClick={handleClick} />
    </Wrapper>
  );
};

export default SignOut;
