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

export const CardWrapper = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
