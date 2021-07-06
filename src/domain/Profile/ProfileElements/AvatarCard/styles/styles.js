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
    gap: 48px;
    padding: 3rem;
    border-radius: ${(props) => props.theme.tabletBorderRadius};
  }

  @media only screen and (min-width: 1024px) {
    gap: 72px;
    padding: 4rem;
  }
`;

export const AvatarImage = styled.img`
  width: 50vw;
  max-width: 320px;

  border-radius: 50%;
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.boxShadow};

  @media only screen and (min-width: 1024px) {
    max-width: 380px;
  }
`;

export const Username = styled.div`
  font-size: 2rem;

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 4rem;
  }
`;

export const CaughtWrapper = styled.div`
  width: 100%;
  font-size: 1.2rem;

  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2.5rem;
    margin-top: 3rem;
  }
`;
