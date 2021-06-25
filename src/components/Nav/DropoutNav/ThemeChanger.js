import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeChangeContext } from '../../../contexts/ThemeChangeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeChangeContext);

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <Wrapper onClick={changeTheme}>
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} size="2x" />
      ) : (
        <FontAwesomeIcon icon={faMoon} size="2x" />
      )}
    </Wrapper>
  );
}

export default ThemeChanger;
