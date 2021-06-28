import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 95vw;
  height: 120px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  .heading {
    font-weight: medium;
    font-size: 1.5rem;
  }
  .abilities {
    display: flex;
    justify-content: space-between;
  }
  .ability-placeholder {
    margin: 0 2rem;
    opacity: 0.6;
  }
  .hidden-ability {
    opacity: 0.6;
  }
`;
//hidden
function Abilities({ abilities }) {
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
}

export default Abilities;
