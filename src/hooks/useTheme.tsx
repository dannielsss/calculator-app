import { useContext, useRef } from 'react';
import { ThemeContext } from '../context/Theme/ThemeContext';
import { Themes } from '../types';

/**
 * Hook to handle themes
 * @returns
 */
export const useTheme = () => {
  const { theme, dispatch } = useContext(ThemeContext);
  const themes: Themes[] = ['light', 'dark', 'violet'];
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  /**
   * Function to switch to the next topic
   */
  const handleToggleTheme = () => {
    toggleButtonRef.current?.blur(); // Deselect the button
    const currentIndex = themes.findIndex((t) => t == theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    dispatch({ type: 'TOGGLE_THEME', payload: themes[nextIndex] });
    window.localStorage.setItem('theme', themes[nextIndex]);
  };

  return { handleToggleTheme, toggleButtonRef, theme };
};
