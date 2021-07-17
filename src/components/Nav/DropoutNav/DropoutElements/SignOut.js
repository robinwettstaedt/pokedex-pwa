import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import app from '../../../../utils/Firebase';
import { Wrapper, ClosingWrapper, Text } from './styles/styles';
import Media from 'react-media';

const SignOut = () => {
  const handleClick = () => {
    app.auth().signOut();
  };

  return (
    <Media query="(min-width: 1200px)">
      {(matches) =>
        matches ? (
          <ClosingWrapper onClick={handleClick}>
            <Text>Sign Out</Text>
            <Wrapper>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size="3x"
                onClick={handleClick}
              />
            </Wrapper>
          </ClosingWrapper>
        ) : (
          <Wrapper>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              size="3x"
              onClick={handleClick}
            />
          </Wrapper>
        )
      }
    </Media>
  );
};

export default SignOut;
