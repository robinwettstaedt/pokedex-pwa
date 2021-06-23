import React from 'react';
import styled from 'styled-components';

function Name({ pokemonName, number }) {
  const Wrapper = styled.div`
    width: 90vw;
    height: 30px;
    display: flex;
    justify-content: space-between;
    /* color: ${(props) => props.theme.primaryFontColor};
    background: ${(props) => props.theme.primaryBackgroundColor}; */
    .name {
      color: #5a5a5a;
    }
    .number {
      margin: 0;
    }
  `;

  return (
    <>
      <Wrapper>
        <span className="name">
          {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </span>
        <span className="number">#{number}</span>
      </Wrapper>
    </>
  );
}

export default Name;
