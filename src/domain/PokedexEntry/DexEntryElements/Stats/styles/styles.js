import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 95vw;
  height: 200px;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;
