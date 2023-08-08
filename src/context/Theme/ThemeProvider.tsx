import React, { useReducer } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeContext } from './ThemeContext';
import { INITIAL_STATE } from './constants';
import { themeReducer } from './themeReducer';

interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[];
}

/**
 * Provider for theme context
 * @returns
 */
function ThemeProvider({ children }: ThemeProviderProps) {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      <StyledThemeProvider theme={{ mode: state.theme }}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
