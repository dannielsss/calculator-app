import { styled } from 'styled-components';
import { COLORS } from '../../constants';
import { Themes } from '../../types';

// Navbar positions
export const NavbarContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

// Toggle theme
export const NavbarToggleTheme = styled.button<{ theme?: { mode: Themes } }>`
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;

  background: ${(props) => COLORS[props.theme.mode].keypadBackground};
  color: ${(props) => COLORS[props.theme.mode].mainText};
`;
