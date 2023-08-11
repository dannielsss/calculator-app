import { useContext, useState } from 'react';
import { ThemeContext } from '../context/Theme/ThemeContext';
import { Themes } from '../types';

/**
 * Hook to handle themes
 * @returns
 */
export const useTheme = () => {
  const { theme, dispatch } = useContext(ThemeContext);
  const themes: Themes[] = ['light', 'dark', 'violet'];
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  /**
   * Function to switch to the next topic
   */
  const handleToggleTheme = () => {
    const nextIndex = (currentThemeIndex + 1) % themes.length;
    setCurrentThemeIndex(nextIndex);
    dispatch({ type: 'TOGGLE_THEME', payload: themes[nextIndex] });
  };

  return { handleToggleTheme, theme };
};
