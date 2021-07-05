import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  height: 120px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.primaryBoxShadowValue};

  @media only screen and (min-width: 768px) {
    padding: 1rem 1.5rem;
    height: 18vh;
    border-radius: ${(props) => props.theme.tabletBorderRadius};
  }

  @media only screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;

export const Heading = styled.div`
  font-weight: medium;
  font-size: 1.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const AbilitiesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: -0.8rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const RegularAbility = styled.span`
  margin-top: 0.8rem;
`;

export const HiddenAbility = styled.span`
  opacity: 0.6;
  margin-top: 0.8rem;
`;

export const AbilityPlaceholder = styled.span`
  margin: 0.8rem 1rem 0;
  opacity: 0.6;
`;
