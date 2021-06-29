import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkWrapper = styled(Link)`
  color: ${(props) => props.theme.primaryFontColor};

  text-decoration: none;
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ExternalLinkWrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
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
