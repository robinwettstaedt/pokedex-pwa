import styled from 'styled-components';

// Components for Nav.js
export const NavWrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 100vw;
  height: 10vh;
  padding: 1rem;
  position: fixed;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const PlaceholderNav = styled.div`
  width: 100vw;
  height: 10vh;
`;

export const RightWrapper = styled.div`
  width: 85%;
  height: 30px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
`;
