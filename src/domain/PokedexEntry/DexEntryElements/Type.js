import React from 'react';
import styled from 'styled-components';

const TypeButton = styled.div`
  color: white;
  background: ${(props) => props.theme[props.type]};

  width: 90px;
  height: 30px;

  font-size: 1.25rem;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

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
