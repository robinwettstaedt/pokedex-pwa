import React from 'react';
import {
  Wrapper,
  NameTag,
  NumberTag,
  NameAndBallWrapper,
} from './styles/styles';

const Name = ({ pokemonName, number }) => {
  return (
    <Wrapper>
      <NameAndBallWrapper>
        <NameTag className="name">
          {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </NameTag>
      </NameAndBallWrapper>
      <NumberTag className="number">#{number}</NumberTag>
    </Wrapper>
  );
};

export default Name;
