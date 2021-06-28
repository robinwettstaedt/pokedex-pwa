import React from 'react';
import Type from './Type/Type';
import { Wrapper } from './styles/styles';

function Name({ firstType, secondType }) {
  return (
    <>
      <Wrapper>
        <span className="text">Type</span>
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
}

export default Name;
