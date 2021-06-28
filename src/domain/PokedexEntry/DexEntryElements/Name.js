import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeChangeContext } from '../../../contexts/ThemeChangeContext';

const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 95vw;
  height: 60px;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  .name {
    font-weight: medium;
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  .number {
    font-weight: medium;
    font-size: 1.5rem;
  }
`;

function Name({ pokemonName, number, isCaught }) {
  const { theme } = useContext(ThemeChangeContext);
  return (
    <>
      <Wrapper>
        <div>
          <span className="name">
            {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
          </span>

          {isCaught && theme === 'dark' && (
            <img
              height={20}
              src={process.env.PUBLIC_URL + `/icons/pokeball-white.png`}
              alt={`Pokemon Number: ${number}`}
            />
          )}

          {isCaught && theme === 'light' && (
            <img
              height={20}
              src={process.env.PUBLIC_URL + `/icons/pokeball-grey.png`}
              alt={`Pokemon Number: ${number}`}
            />
          )}
        </div>
        <span className="number">#{number}</span>
      </Wrapper>
    </>
  );
}

export default Name;
