import React, { useContext } from 'react';
import { SearchContext } from '../../../../contexts/SearchContext';
import { SearchWrapper } from '../styles/styles';
import SearchButton from './SearchComponents/SearchButton';
import SearchBar from './SearchComponents/SearchBar';

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
