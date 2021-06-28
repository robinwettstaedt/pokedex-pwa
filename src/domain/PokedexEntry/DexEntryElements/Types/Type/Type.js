import React from 'react';
import { TypeButton } from './styles/styles';

function Type({ type }) {
  return (
    <>
      <TypeButton type={type}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </TypeButton>
    </>
  );
}

export default Type;
