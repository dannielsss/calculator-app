import React from 'react';
import { NavbarToggleTheme } from './styles';
import { useTheme } from '../../hooks/useTheme';

/**
 * Button for toggle theme dark light or violet
 * @returns
 */
function ToggleTheme() {
  const { handleToggleTheme, toggleButtonRef } = useTheme();

  return (
    <NavbarToggleTheme onClick={handleToggleTheme} ref={toggleButtonRef}>
      Toggle theme
    </NavbarToggleTheme>
  );
}

export default ToggleTheme;
