import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 1rem ${(props) => props.theme.outsideMobilePaddingLeftRight};

  @media only screen and (min-width: 768px) {
    padding: 1rem ${(props) => props.theme.outsideTabletPaddingLeftRight};
  }

  @media only screen and (min-width: 1024px) {
    padding: 1rem ${(props) => props.theme.outsideDesktopPaddingLeftRight};
  }
`;

export const List = styled.ul`
  width: 95vw;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin: -12px 0 0 0;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ListEntry = styled.li`
  background-color: ${(props) => props.theme.primaryCardBackgroundColor};
  height: 60px;
  padding: 1rem;

  display: flex;
  align-items: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.primaryBoxShadowValue};

  @media only screen and (min-width: 768px) {
    height: 70px;
  }

  @media only screen and (min-width: 1024px) {
    height: 80px;
  }
`;

export const Name = styled(Link)`
  color: ${(props) => props.theme.primaryFontColor};
  text-decoration: none;
  font-size: 24px;
  margin-left: 1rem;

  @media only screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const Sprite = styled.img`
  height: 60px;

  margin-left: auto;
`;

export const Ball = styled.img`
  height: 24px;
`;

export const BallPlaceholder = styled.div`
  height: 24px;
  width: 24px;
`;
