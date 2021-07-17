import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl } from '@fortawesome/free-solid-svg-icons';
import {
  LinkWrapper,
  IconWrapper,
  TextAndIconWrapper,
  Text,
} from './styles/styles';
import Media from 'react-media';

const ListLink = ({ setDropoutOpen }) => {
  const handleClick = () => {
    setDropoutOpen(false);
  };

  return (
    <Media query="(min-width: 1200px)">
      {(matches) =>
        matches ? (
          <TextAndIconWrapper to="/pokedex" onClick={handleClick}>
            <Text>Dex</Text>
            <IconWrapper>
              <FontAwesomeIcon icon={faListOl} size="3x" />
            </IconWrapper>
          </TextAndIconWrapper>
        ) : (
          <LinkWrapper to="/pokedex" onClick={handleClick}>
            <FontAwesomeIcon icon={faListOl} size="3x" />
          </LinkWrapper>
        )
      }
    </Media>
  );
};

export default ListLink;
