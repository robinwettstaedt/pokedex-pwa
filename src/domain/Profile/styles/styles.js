import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem ${(props) => props.theme.outsideMobilePaddingLeftRight};
  gap: 12px;

  @media only screen and (min-width: 768px) {
    gap: 24px;
    padding: 1rem ${(props) => props.theme.outsideTabletPaddingLeftRight};
  }

  @media only screen and (min-width: 1024px) {
    gap: 28px;
    padding: 1rem ${(props) => props.theme.outsideDesktopPaddingLeftRight};
  }
`;

export const CardWrapper = styled.div`
  width: 95vw;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ButtonWrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.primaryBoxShadowValue};

  @media only screen and (min-width: 768px) {
    padding: 1.5rem;
    height: 10vh;
    border-radius: ${(props) => props.theme.tabletBorderRadius};
  }
`;
