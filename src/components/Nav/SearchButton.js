import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchContext';

const Wrapper = styled.div`
  background: ${(props) => props.theme.primaryBackgroundColor};
  font-size: 14px;

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
`;

const GlassWrapper = styled(Link)`
  color: ${(props) => props.theme.primaryFontColor};
  text-decoration: none;
  margin-left: 1rem;
`;

const CrossWrapper = styled.div`
  margin-left: 1rem;
`;

function SearchButton() {
  const { searching, setSearching } = useContext(SearchContext);

  const handleClick = () => {
    setSearching(!searching);
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default SearchButton;
