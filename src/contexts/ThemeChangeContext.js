import React, { useState } from 'react';

export const ThemeChangeContext = React.createContext();

export const ThemeChangeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeChangeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeChangeContext.Provider>
  );
};
