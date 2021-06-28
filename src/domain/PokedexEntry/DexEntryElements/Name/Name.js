import React, { useContext } from 'react';
import { Wrapper, NameTag, NumberTag } from './styles/styles';
import { ThemeChangeContext } from '../../../../contexts/ThemeChangeContext';

const Name = ({ pokemonName, number, isCaught }) => {
  const { theme } = useContext(ThemeChangeContext);
  return (
    <>
      <Wrapper>
        <div>
          <NameTag className="name">
            {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
          </NameTag>

          {isCaught && theme === 'dark' && (
            <img
              height={20}
              src={process.env.PUBLIC_URL + `/icons/pokeball-white.png`}
              alt={`Pokemon Number: ${number}`}
            />
          )}

          {isCaught && theme === 'light' && (
            <img
              height={20}
              src={process.env.PUBLIC_URL + `/icons/pokeball-grey.png`}
              alt={`Pokemon Number: ${number}`}
            />
          )}
        </div>
        <NumberTag className="number">#{number}</NumberTag>
      </Wrapper>
    </>
  );
};

export default Name;
