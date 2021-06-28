import React from 'react';
import { Wrapper } from './styles/styles';

//hidden
const Abilities = ({ abilities }) => {
  return (
    <>
      <Wrapper>
        <div className="heading">Abilities</div>
        <div className="abilities">
          {abilities[0] && (
            <span>
              {abilities[0].ability.name.charAt(0).toUpperCase() +
                abilities[0].ability.name.slice(1)}
            </span>
          )}

          {abilities[1] ? (
            <span
              className={
                abilities[1].is_hidden ? 'hidden-ability' : 'second-ability'
              }
            >
              {abilities[1].ability.name.charAt(0).toUpperCase() +
                abilities[1].ability.name.slice(1)}
            </span>
          ) : (
            <span className="ability-placeholder">-</span>
          )}

          {abilities[2] ? (
            <span
              className={
                abilities[1].is_hidden ? 'hidden-ability' : 'third-ability'
              }
            >
              {abilities[2].ability.name.charAt(0).toUpperCase() +
                abilities[2].ability.name.slice(1)}
            </span>
          ) : (
            <span className="ability-placeholder">-</span>
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default Abilities;
