import React, { useContext } from 'react';
import { SearchContext } from '../../../../../contexts/SearchContext';
import { SearchBox } from '../../styles/styles';

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
