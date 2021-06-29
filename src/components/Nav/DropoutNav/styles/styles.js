import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 60%;
  height: 100%;
  left: 70%;
  position: fixed;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const Spacer = styled.div`
  width: 50%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
