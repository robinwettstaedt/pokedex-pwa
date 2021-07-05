import React from 'react';
import Type from '../../../../PokedexEntry/DexEntryElements/Types/Type/Type';
import { Wrapper } from './styles/styles';

const CardTypes = ({ firstType, secondType }) => {
  return (
    <>
      <Wrapper>
        <span className="types">
          {firstType && <Type type={firstType} />}
          {secondType && (
            <div className="second-type">
              <Type type={secondType} />
            </div>
          )}
        </span>
      </Wrapper>
    </>
  );
};

export default CardTypes;
