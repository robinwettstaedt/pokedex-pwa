import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../../contexts/SearchContext';
import { SearchBox } from './styles/NavElements';

const SearchBar = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleTextInput = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  return (
    <>
      <SearchBox type="text" value={searchValue} onChange={handleTextInput} />
    </>
  );
};

export default SearchBar;
