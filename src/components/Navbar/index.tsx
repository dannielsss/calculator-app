import React from 'react';
import { NavbarContent } from './styles';
import ToggleTheme from './ToggleTheme';

/**
 * Simple navigation for the calculator
 * @returns
 */
function Navbar() {
  return (
    <NavbarContent>
      <header>calc</header>
      <ToggleTheme />
    </NavbarContent>
  );
}

export default Navbar;
