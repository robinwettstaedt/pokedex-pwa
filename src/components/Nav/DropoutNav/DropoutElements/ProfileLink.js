import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
  LinkWrapper,
  IconWrapper,
  TextAndIconWrapper,
  Text,
} from './styles/styles';
import Media from 'react-media';

const ProfileLink = ({ setDropoutOpen }) => {
  const handleClick = () => {
    setDropoutOpen(false);
  };

  return (
    <Media query="(min-width: 1200px)">
      {(matches) =>
        matches ? (
          <TextAndIconWrapper to="/profile" onClick={handleClick}>
            <Text>Profile</Text>
            <IconWrapper>
              <FontAwesomeIcon icon={faUser} size="3x" />
            </IconWrapper>
          </TextAndIconWrapper>
        ) : (
          <LinkWrapper to="/profile" onClick={handleClick}>
            <FontAwesomeIcon icon={faUser} size="3x" />
          </LinkWrapper>
        )
      }
    </Media>
  );
};

export default ProfileLink;
