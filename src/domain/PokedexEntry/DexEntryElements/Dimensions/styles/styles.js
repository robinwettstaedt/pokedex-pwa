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
  .height,
  .weight {
    font-weight: medium;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 768px) {
      font-size: 2rem;
    }

    @media only screen and (min-width: 1024px) {
      font-size: 3rem;
    }
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
