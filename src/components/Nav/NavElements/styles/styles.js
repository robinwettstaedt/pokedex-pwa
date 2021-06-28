import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components for Avatar.js
export const AvatarWrapper = styled.div`
  background: ${(props) => props.theme.primaryBackgroundColor};

  height: 40px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const AvatarImage = styled.img`
  height: 32px;
  border-radius: 50%;
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const Username = styled(Link)`
  color: ${(props) => props.theme.primaryFontColor};
  padding-left: 0.5rem;
  text-decoration: none;
`;

// Components for Search.js
export const SearchWrapper = styled.div`
  width: 100%;
  height: 30px;
  padding: 0 2rem 0 1rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// Components for SearchButton.js
export const SearchButtonWrapper = styled.div`
  width: 30px;
  height: 30px;

  font-size: 14px;

  display: flex;
  align-items: center;
`;

export const GlassWrapper = styled(Link)`
  color: ${(props) => props.theme.primaryFontColor};
  text-decoration: none;
  margin-left: 1rem;
`;

export const CrossWrapper = styled.div`
  margin-left: 1rem;
`;

// Components for SearchBox.js
export const SearchBox = styled.input`
  width: 100%;
  height: 30px;

  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

// Components for MenuButton.js
export const MenuButtonWrapper = styled.div`
  width: 35px;
  height: 35px;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
