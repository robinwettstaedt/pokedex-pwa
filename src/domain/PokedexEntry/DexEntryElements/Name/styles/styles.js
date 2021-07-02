import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  height: 60px;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.primaryBoxShadowValue};

  @media only screen and (min-width: 768px) {
    padding: 1.5rem;
    height: 10vh;
    border-radius: ${(props) => props.theme.tabletBorderRadius};
  }

  @media only screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;

export const NameAndBallWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NameTag = styled.span`
  font-weight: medium;
  font-size: 1.5rem;
  margin-right: 0.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const NumberTag = styled.span`
  font-weight: medium;
  font-size: 1.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const IMG = styled.img`
  height: 24px;

  @media only screen and (min-width: 768px) {
    height: 32px;
  }

  @media only screen and (min-width: 1024px) {
    height: 42px;
    margin-left: 1rem;
  }
`;
