import React, { useContext } from 'react';
import { Wrapper } from './styles/styles';
import { ThemeChangeContext } from '../../../../contexts/ThemeChangeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeChangeContext);

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <Wrapper onClick={changeTheme}>
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} size="3x" />
      ) : (
        <FontAwesomeIcon icon={faMoon} size="3x" />
      )}
    </Wrapper>
  );
}

export default ThemeChanger;
