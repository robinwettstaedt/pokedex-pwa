import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { Wrapper, TextAndIconWrapper, Text } from './styles/styles';
import Media from 'react-media';

const ClosingButton = ({ setDropoutOpen }) => {
  const handleClick = () => {
    setDropoutOpen(false);
  };

  return (
    <Media query="(min-width: 1200px)">
      {(matches) =>
        matches ? (
          <TextAndIconWrapper onClick={handleClick}>
            <Text>Close</Text>
            <Wrapper>
              <FontAwesomeIcon
                icon={faTimesCircle}
                size="3x"
                onClick={handleClick}
              />
            </Wrapper>
          </TextAndIconWrapper>
        ) : (
          <Wrapper onClick={handleClick}>
            <FontAwesomeIcon
              icon={faTimesCircle}
              size="3x"
              onClick={handleClick}
            />
          </Wrapper>
        )
      }
    </Media>
  );
};

export default ClosingButton;
