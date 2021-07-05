import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 768px) {
    padding: 1.5rem;
    height: 10vh;
    border-radius: ${(props) => props.theme.tabletBorderRadius};
  }

  @media only screen and (min-width: 1024px) {
    padding: 2rem;
  }
  .types {
    display: flex;
  }
  .second-type {
    margin-left: 0.6rem;
  }
`;
