import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  ExternalLinkWrapper,
  StyledAnchorTag,
  GitLinkWrapper,
  Text,
} from './styles/styles';
import Media from 'react-media';

const HomeLink = () => {
  return (
    <Media query="(min-width: 1200px)">
      {(matches) =>
        matches ? (
          <GitLinkWrapper href="https://github.com/robinwettstaedt">
            <Text>GitHub</Text>
            <ExternalLinkWrapper>
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </ExternalLinkWrapper>
          </GitLinkWrapper>
        ) : (
          <ExternalLinkWrapper>
            <StyledAnchorTag href="https://github.com/robinwettstaedt">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </StyledAnchorTag>
          </ExternalLinkWrapper>
        )
      }
    </Media>
  );
};

export default HomeLink;
