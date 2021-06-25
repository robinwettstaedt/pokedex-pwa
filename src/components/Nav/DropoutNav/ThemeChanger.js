import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchContext';

const Wrapper = styled.div`
  /* color: ${(props) => props.theme.primaryFontColor}; */
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
`;

const ListOpener = styled(Link)`
  color: ${(props) => props.theme.primaryFontColor};
  width: 30px;
  text-decoration: none;
  margin-left: 1rem;
`;

function SearchButton() {
  const { searching, setSearching } = useContext(SearchContext);

  const handleClick = () => {
    setSearching(!searching);
  };

  return (
    <Wrapper>
      <ListOpener to="/pokedex" onClick={handleClick}>
        {searching ? (
          <FontAwesomeIcon icon={faTimesCircle} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faSearch} size="2x" />
        )}
      </ListOpener>
    </Wrapper>
  );
}

export default SearchButton;
