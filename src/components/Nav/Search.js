import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchContext';

function Search() {
  const { searching, setSearching, searchValue, setSearchValue } =
    useContext(SearchContext);

  const handleTextInput = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  return (
    <div>
      {!searching && (
        <button onClick={() => setSearching(true)}>
          <Link to="/pokedex">Start searching</Link>
        </button>
      )}
      {searching && (
        <button onClick={() => setSearching(false)}>end searching</button>
      )}

      {searching && (
        <input type="text" value={searchValue} onChange={handleTextInput} />
      )}
    </div>
  );
}

export default Search;
