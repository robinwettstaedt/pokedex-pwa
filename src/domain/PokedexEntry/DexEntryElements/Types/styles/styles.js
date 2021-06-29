import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  width: 95vw;
  height: 60px;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.primaryBoxShadowValue};

  .text {
    font-weight: medium;
    font-size: 1.5rem;
  }
  .types {
    display: flex;
    /* justify-content: center; */
  }
  .second-type {
    margin-left: 0.6rem;
  }
`;
