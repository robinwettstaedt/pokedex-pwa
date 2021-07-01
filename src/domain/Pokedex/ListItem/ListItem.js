import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
import { ThemeChangeContext } from '../../../contexts/ThemeChangeContext';
import namesArray from '../../../utils/PokemonNames';
import {
  ListEntry,
  Name,
  Ball,
  BallPlaceholder,
  Sprite,
} from './styles/styles';

const ListItem = ({ number, index, caught }) => {
  const { searching, searchValue } = useContext(SearchContext);
  const { theme } = useContext(ThemeChangeContext);

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
        <ListEntry key={number}>
          {caught ? (
            theme === 'dark' ? (
              <Ball
                height={20}
                src={process.env.PUBLIC_URL + `/icons/pokeball-white.png`}
                alt={`Pokemon Number: ${number}`}
              />
            ) : (
              <Ball
                height={20}
                src={process.env.PUBLIC_URL + `/icons/pokeball-grey.png`}
                alt={`Pokemon Number: ${number}`}
              />
            )
          ) : (
            <BallPlaceholder />
          )}
          <Name to={`/pokedex/${index}`}>
            #{number} {namesArray[index - 1]}
          </Name>
          <Sprite
            src={process.env.PUBLIC_URL + `/sprites/${number}MS.png`}
            alt={`Pokemon Number: ${number}`}
          />
        </ListEntry>
      </div>
    );
  }
};

export default ListItem;
