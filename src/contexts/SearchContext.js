import React, { useState } from 'react';

export const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
  const [searching, setSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchContext.Provider
      value={{
        searching,
        setSearching,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
