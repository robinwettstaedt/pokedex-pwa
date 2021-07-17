import React, { useContext } from 'react';
import { ThemeChangeContext } from '../../../../contexts/ThemeChangeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, ClosingWrapper, Text } from './styles/styles';
import Media from 'react-media';

function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeChangeContext);

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <Media query="(min-width: 1200px)">
      {(matches) =>
        matches ? (
          <ClosingWrapper onClick={changeTheme}>
            <Text>Light / Dark</Text>
            <Wrapper onClick={changeTheme}>
              {theme === 'dark' ? (
                <FontAwesomeIcon icon={faSun} size="3x" />
              ) : (
                <FontAwesomeIcon icon={faMoon} size="3x" />
              )}
            </Wrapper>
          </ClosingWrapper>
        ) : (
          <Wrapper onClick={changeTheme}>
            {theme === 'dark' ? (
              <FontAwesomeIcon icon={faSun} size="3x" />
            ) : (
              <FontAwesomeIcon icon={faMoon} size="3x" />
            )}
          </Wrapper>
        )
      }
    </Media>
  );
}

export default ThemeChanger;
