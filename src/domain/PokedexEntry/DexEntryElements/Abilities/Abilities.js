import React from 'react';
import {
  Wrapper,
  Heading,
  AbilitiesWrapper,
  AbilityPlaceholder,
  HiddenAbility,
  RegularAbility,
} from './styles/styles';

const Abilities = ({ abilities }) => {
  return (
    <Wrapper>
      <Heading>Abilities</Heading>
      <AbilitiesWrapper>
        {abilities[0] && (
          <RegularAbility>
            {abilities[0].ability.name.charAt(0).toUpperCase() +
              abilities[0].ability.name.slice(1)}
          </RegularAbility>
        )}

        {abilities[1] ? (
          abilities[1].is_hidden ? (
            <HiddenAbility>
              {abilities[1].ability.name.charAt(0).toUpperCase() +
                abilities[1].ability.name.slice(1)}
            </HiddenAbility>
          ) : (
            <RegularAbility>
              {abilities[1].ability.name.charAt(0).toUpperCase() +
                abilities[1].ability.name.slice(1)}
            </RegularAbility>
          )
        ) : (
          <AbilityPlaceholder>-</AbilityPlaceholder>
        )}

        {abilities[2] ? (
          abilities[2].is_hidden ? (
            <HiddenAbility>
              {abilities[2].ability.name.charAt(0).toUpperCase() +
                abilities[2].ability.name.slice(1)}
            </HiddenAbility>
          ) : (
            <RegularAbility>
              {abilities[2].ability.name.charAt(0).toUpperCase() +
                abilities[2].ability.name.slice(1)}
            </RegularAbility>
          )
        ) : (
          <AbilityPlaceholder>-</AbilityPlaceholder>
        )}
      </AbilitiesWrapper>
    </Wrapper>
  );
};

export default Abilities;
