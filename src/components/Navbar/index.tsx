import React from 'react';
import { NavbarContent, NavbarToggleTheme } from './styles';

/**
 * Simple navigation for the calculator
 * @returns
 */
function Navbar() {
  return (
    <NavbarContent>
      <header>calc</header>
      <NavbarToggleTheme>Toggle theme</NavbarToggleTheme>
    </NavbarContent>
  );
}

export default Navbar;
