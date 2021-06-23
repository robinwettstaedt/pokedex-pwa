import React from 'react';
import styled from 'styled-components';

function Type({ type }) {
  const TypeButton = styled.div`
    color: white;
    background: ${(props) => props.theme[type]};
    width: 100px;
    height: 30px;
    font-size: 1.25rem;
    border-radius: 5px;
  `;

  return (
    <>
      <TypeButton>{type.charAt(0).toUpperCase() + type.slice(1)}</TypeButton>
    </>
  );
}

export default Type;
