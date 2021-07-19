import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.75rem;
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

  @media only screen and (min-width: 1200px) {
    width: 80vw;
  }

  @media only screen and (min-width: 1600px) {
    width: 65vw;
  }

  @media only screen and (min-width: 2000px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ListEntry = styled.li``;

export const ListElement = styled(Link)`
  background-color: ${(props) => props.theme.primaryCardBackgroundColor};
  height: 60px;
  padding: 1rem;

  color: ${(props) => props.theme.primaryFontColor};
  text-decoration: none;

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

export const Name = styled.div`
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
