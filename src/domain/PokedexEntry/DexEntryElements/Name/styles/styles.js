import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 95vw;
  height: 60px;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const NameTag = styled.span`
  font-weight: medium;
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

export const NumberTag = styled.span`
  font-weight: medium;
  font-size: 1.5rem;
`;
