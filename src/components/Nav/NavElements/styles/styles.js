import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components for Avatar.js
export const AvatarImage = styled.img`
  height: 40px;
  border-radius: 50%;
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.boxShadow};

  @media only screen and (min-width: 768px) {
    height: 48px;
  }

  @media only screen and (min-width: 1024px) {
    height: 64px;
  }
`;

export const Username = styled(Link)`
  color: ${(props) => props.theme.primaryFontColor};
  padding-left: 0.5rem;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;

  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
    padding-left: 0.8rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2.4rem;
  }
`;

// Components for Search.js
export const SearchWrapper = styled.div`
  width: 100%;
  padding: 0 1rem 0 1rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// Components for SearchButton.js
export const SearchButtonWrapper = styled.div`
  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 1024px) {
  }
`;

export const GlassWrapper = styled(Link)`
  color: ${(props) => props.theme.primaryFontColor};
  text-decoration: none;
`;

// Components for SearchBox.js
export const SearchBox = styled.input`
  width: 100%;
  height: 40px;
  font-size: 1.5rem;
  padding: 0.7rem;
  margin-right: 1rem;

  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  border-radius: 20px;
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.boxShadow};

  @media only screen and (min-width: 768px) {
    height: 60px;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 30px;
  }

  @media only screen and (min-width: 1024px) {
    height: 80px;
    font-size: 2.5rem;
    padding: 1.5rem;
    border-radius: 40px;
  }
`;

// Components for MenuButton.js
export const MenuButtonWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    margin-left: 1rem;
  }

  @media only screen and (min-width: 1024px) {
  }
`;
