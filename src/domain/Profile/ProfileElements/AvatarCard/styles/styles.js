import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  padding: 2rem;
  width: 95vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.primaryBoxShadowValue};

  @media only screen and (min-width: 768px) {
    padding: 1.5rem;
    height: 10vh;
    border-radius: ${(props) => props.theme.tabletBorderRadius};
  }
`;

export const AvatarImage = styled.img`
  width: 50vw;
  border-radius: 50%;
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.boxShadow};

  @media only screen and (min-width: 768px) {
    height: 48px;
  }

  @media only screen and (min-width: 1024px) {
    height: 64px;
  }
`;

export const Username = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  padding-left: 0.5rem;
  text-decoration: none;
  font-size: 2rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
    padding-left: 0.8rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2.4rem;
  }
`;

export const CaughtWrapper = styled.div`
  width: 100%;
  font-size: 1.2rem;

  display: flex;
  justify-content: space-between;
`;
