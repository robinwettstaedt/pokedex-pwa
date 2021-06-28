import React from 'react';
import { Wrapper } from './styles/styles';

const Name = ({ height, weight }) => {
  return (
    <>
      <Wrapper>
        <div className="height">
          <span>Height:</span>
          <span>{height / 10} m</span>
        </div>
        <div className="weight">
          <span>Weight:</span>
          <span>{weight / 10} kg</span>
        </div>
      </Wrapper>
    </>
  );
};

export default Name;
