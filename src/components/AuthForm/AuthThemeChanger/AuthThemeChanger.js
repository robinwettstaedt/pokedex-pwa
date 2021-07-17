import React, { useContext } from 'react';
import { ThemeChangeContext } from '../../../contexts/ThemeChangeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeWrapper } from '../styles/styles';

function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeChangeContext);

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <ThemeWrapper onClick={changeTheme}>
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} size="3x" />
      ) : (
        <FontAwesomeIcon icon={faMoon} size="3x" />
      )}
    </ThemeWrapper>
  );
}

export default ThemeChanger;
