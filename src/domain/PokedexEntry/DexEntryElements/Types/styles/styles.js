import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  height: 60px;
  padding: 1rem;

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

  .text {
    font-weight: medium;
    font-size: 1.5rem;

    @media only screen and (min-width: 768px) {
      font-size: 2rem;
    }

    @media only screen and (min-width: 1024px) {
      font-size: 3rem;
    }
  }
  .types {
    display: flex;
  }
  .second-type {
    margin-left: 0.6rem;
  }
`;
