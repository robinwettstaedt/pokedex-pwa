import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchContext } from '../../contexts/SearchContext';
import {
  SearchButtonWrapper,
  GlassWrapper,
  CrossWrapper,
} from './styles/NavElements';

const SearchButton = () => {
  const { searching, setSearching } = useContext(SearchContext);

  const handleClick = () => {
    setSearching(!searching);
  };

  return (
    <SearchButtonWrapper>
      {searching ? (
        <CrossWrapper>
          <FontAwesomeIcon
            onClick={handleClick}
            icon={faTimesCircle}
            size="2x"
          />
        </CrossWrapper>
      ) : (
        <GlassWrapper to="/pokedex">
          <FontAwesomeIcon onClick={handleClick} icon={faSearch} size="2x" />
        </GlassWrapper>
      )}
    </SearchButtonWrapper>
  );
};

export default SearchButton;
