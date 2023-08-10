import React, { useContext, useState } from 'react';
import { NavbarToggleTheme } from './styles';
import { ThemeContext } from '../../context/Theme/ThemeContext';
import { Themes } from '../../types';

/**
 * Button for toggle theme dark light or violet
 * @returns
 */
function ToggleTheme() {
  const { dispatch } = useContext(ThemeContext);
  const themes: Themes[] = ['light', 'dark', 'violet'];
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const handleToggleTheme = () => {
    const nextIndex = (currentThemeIndex + 1) % themes.length;
    setCurrentThemeIndex(nextIndex);
    dispatch({ type: 'TOGGLE_THEME', payload: themes[nextIndex] });
  };

  return (
    <NavbarToggleTheme onClick={handleToggleTheme}>
      Toggle theme
    </NavbarToggleTheme>
  );
}

export default ToggleTheme;
