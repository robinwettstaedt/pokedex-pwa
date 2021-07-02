import React, { useContext } from 'react';
import {
  Wrapper,
  NameTag,
  NumberTag,
  IMG,
  NameAndBallWrapper,
} from './styles/styles';
import { ThemeChangeContext } from '../../../../contexts/ThemeChangeContext';

const Name = ({ pokemonName, number, isCaught }) => {
  const { theme } = useContext(ThemeChangeContext);
  return (
    <>
      <Wrapper>
        <NameAndBallWrapper>
          <NameTag className="name">
            {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
          </NameTag>

          {isCaught && theme === 'dark' && (
            <IMG
              src={process.env.PUBLIC_URL + `/icons/pokeball-white.png`}
              alt={`Pokemon Number: ${number}`}
            />
          )}

          {isCaught && theme === 'light' && (
            <IMG
              src={process.env.PUBLIC_URL + `/icons/pokeball-grey.png`}
              alt={`Pokemon Number: ${number}`}
            />
          )}
        </NameAndBallWrapper>
        <NumberTag className="number">#{number}</NumberTag>
      </Wrapper>
    </>
  );
};

export default Name;
