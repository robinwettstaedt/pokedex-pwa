import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.7rem;
  }
`;

export const LinkWrapper = styled(Link)`
  color: ${(props) => props.theme.primaryFontColor};

  text-decoration: none;
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.7rem;
  }
`;

export const ExternalLinkWrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.7rem;
  }
`;

export const StyledAnchorTag = styled.a`
  color: ${(props) => props.theme.primaryFontColor};
`;

export const DroputBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 2;
`;

// styles for anything above 1200px view width
export const TextAndIconWrapper = styled(Link)`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.primaryFontColor};
`;

export const ClosingWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GitLinkWrapper = styled.a`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.primaryFontColor};
  text-decoration: none;
`;

export const Text = styled.div`
  font-size: 3rem;
`;

export const LinkText = styled.a`
  color: ${(props) => props.theme.primaryFontColor};
  text-decoration: none;
  font-size: 3rem;
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.7rem;
  }
`;
