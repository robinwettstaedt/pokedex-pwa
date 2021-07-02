import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem ${(props) => props.theme.outsideMobilePaddingLeftRight};

  @media only screen and (min-width: 768px) {
    padding: 1rem ${(props) => props.theme.outsideTabletPaddingLeftRight};
  }
`;

export const GridWrapper = styled.div`
  width: 95vw;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin: -12px 0 0 0;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BottomSpacer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    height: 120px;
  }

  @media only screen and (min-width: 1024px) {
    height: 180px;
  }
`;

export const SpacerDot = styled.div`
  width: 10px;
  height: 10px;

  border-radius: 50%;
  background-color: ${(props) => props.theme.primaryFontColor};

  @media only screen and (min-width: 768px) {
    width: 15px;
    height: 15px;
  }

  @media only screen and (min-width: 1024px) {
    width: 20px;
    height: 20px;
  }
`;
