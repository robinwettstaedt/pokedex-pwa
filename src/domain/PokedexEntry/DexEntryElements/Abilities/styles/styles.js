import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 95vw;
  height: 120px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  .heading {
    font-weight: medium;
    font-size: 1.5rem;
  }
  .abilities {
    display: flex;
    justify-content: space-between;
  }
  .ability-placeholder {
    margin: 0 2rem;
    opacity: 0.6;
  }
  .hidden-ability {
    opacity: 0.6;
  }
`;
