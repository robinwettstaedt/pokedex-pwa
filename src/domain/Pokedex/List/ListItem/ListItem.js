import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../../../contexts/SearchContext';
import namesArray from '../../../../utils/PokemonNames';

const ListItem = ({ number, index, caught }) => {
  const { searching, searchValue } = useContext(SearchContext);

  const [activelySearching, setActivelySearching] = useState(false);

  useEffect(() => {
    if (searching && searchValue !== '') {
      setActivelySearching(true);
    } else {
      setActivelySearching(false);
    }
  }, [searching, searchValue, setActivelySearching]);

  if (
    activelySearching &&
    !namesArray[index - 1].toLowerCase().includes(searchValue)
  ) {
    return null;
  } else {
    return (
      <div>
        <li key={number}>
          {caught ? (
            <img
              height={20}
              src={process.env.PUBLIC_URL + `/icons/pokeball-grey.png`}
              alt={`Pokemon Number: ${number}`}
            />
          ) : (
            <img
              height={20}
              src={process.env.PUBLIC_URL + `/icons/pokeball-white.png`}
              alt={`Pokemon Number: ${number}`}
            />
          )}
          <Link to={`/pokedex/${index}`}>
            #{number} {namesArray[index - 1]}
          </Link>
          <img
            src={process.env.PUBLIC_URL + `/sprites/${number}MS.png`}
            alt={`Pokemon Number: ${number}`}
          />
        </li>
      </div>
    );
  }
};

export default ListItem;
