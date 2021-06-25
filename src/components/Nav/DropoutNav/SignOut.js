import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import app from '../../../utils/Firebase';

const Wrapper = styled.div`
  /* color: ${(props) => props.theme.primaryFontColor}; */
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

function SignOut() {
  const handleClick = () => {
    app.auth().signOut();
  };

  return (
    <Wrapper>
      <FontAwesomeIcon icon={faSignOutAlt} size="2x" onClick={handleClick} />
    </Wrapper>
  );
}

export default SignOut;
