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
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin: -12px 0 0 0;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Heading = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  font-size: 2.5rem;
`;
