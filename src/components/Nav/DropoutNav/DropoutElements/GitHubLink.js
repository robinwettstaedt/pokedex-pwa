import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ExternalLinkWrapper, StyledAnchorTag } from './styles/styles';

const HomeLink = () => {
  return (
    <ExternalLinkWrapper>
      <StyledAnchorTag href="https://github.com/robinwettstaedt">
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </StyledAnchorTag>
    </ExternalLinkWrapper>
  );
};

export default HomeLink;
