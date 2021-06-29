import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat() (6, 1fr);
  grid-row-gap: 12px;
`;

export const BottomSpacer = styled.div`
  width: 95vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpacerDot = styled.div`
  width: 10px;
  height: 10px;

  border-radius: 50%;
  background-color: ${(props) => props.theme.primaryFontColor};
`;
