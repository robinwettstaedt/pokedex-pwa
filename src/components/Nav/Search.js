import React, { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { SearchWrapper } from './styles/NavElements';
import SearchButton from './SearchButton';
import SearchBar from './SearchBar';

function Search() {
  const { searching } = useContext(SearchContext);

  return (
    <SearchWrapper>
      {searching && <SearchBar />}
      <SearchButton />
    </SearchWrapper>
  );
}

export default Search;
