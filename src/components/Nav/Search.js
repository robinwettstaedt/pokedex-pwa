import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../../contexts/SearchContext';
import SearchButton from './SearchButton';
import SearchBar from './SearchBar';

const Wrapper = styled.div`
  /* color: ${(props) => props.theme.primaryFontColor}; */
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 100%;
  height: 40px;
  padding: 0 2rem 0 1rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function Search() {
  const { searching } = useContext(SearchContext);

  return (
    <Wrapper>
      {searching && <SearchBar />}
      <SearchButton />
    </Wrapper>
  );
}

export default Search;
