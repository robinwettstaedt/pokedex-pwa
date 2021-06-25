import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../../contexts/SearchContext';

const SearchBox = styled.input`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 100%;
  height: 30px;
  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

function SearchBar() {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleTextInput = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  return (
    <>
      <SearchBox type="text" value={searchValue} onChange={handleTextInput} />
    </>
  );
}

export default SearchBar;
