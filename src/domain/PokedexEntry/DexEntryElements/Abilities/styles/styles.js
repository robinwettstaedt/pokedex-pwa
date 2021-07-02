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
  .heading {
    font-weight: medium;
    font-size: 1.5rem;

    @media only screen and (min-width: 768px) {
      font-size: 2rem;
    }

    @media only screen and (min-width: 1024px) {
      font-size: 3rem;
    }
  }
  .abilities {
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 768px) {
      font-size: 1.5rem;
    }

    @media only screen and (min-width: 1024px) {
      font-size: 2rem;
    }
  }
  .ability-placeholder {
    margin: 0 2rem;
    opacity: 0.6;
  }
  .hidden-ability {
    opacity: 0.6;
  }

  @media only screen and (min-width: 768px) {
    padding: 1rem 1.5rem;
    height: 18vh;
    border-radius: ${(props) => props.theme.tabletBorderRadius};
  }

  @media only screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;
