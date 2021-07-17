import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {
  IconWrapper,
  LinkWrapper,
  TextAndIconWrapper,
  Text,
} from './styles/styles';
import Media from 'react-media';

const HomeLink = ({ setDropoutOpen }) => {
  const handleClick = () => {
    setDropoutOpen(false);
  };

  return (
    <Media query="(min-width: 1200px)">
      {(matches) =>
        matches ? (
          <TextAndIconWrapper to="/" onClick={handleClick}>
            <Text>Home</Text>
            <IconWrapper>
              <FontAwesomeIcon icon={faHome} size="3x" />
            </IconWrapper>
          </TextAndIconWrapper>
        ) : (
          <LinkWrapper to="/" onClick={handleClick}>
            <FontAwesomeIcon icon={faHome} size="3x" />
          </LinkWrapper>
        )
      }
    </Media>
  );
};

export default HomeLink;
