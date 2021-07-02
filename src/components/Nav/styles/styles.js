import styled from 'styled-components';

// Components for Nav.js
export const NavWrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 100vw;
  height: 10vh;
  padding: 0 ${(props) => props.theme.outsideMobilePaddingLeftRight};
  position: fixed;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    padding: 0 ${(props) => props.theme.outsideTabletPaddingLeftRight};
  }

  @media only screen and (min-width: 1024px) {
    padding: 0 ${(props) => props.theme.outsideDesktopPaddingLeftRight};
  }
`;

export const PlaceholderNav = styled.div`
  width: 100vw;
  height: 10vh;
`;

export const RightWrapper = styled.div`
  width: 85%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;
