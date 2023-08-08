import { styled } from 'styled-components';
import { darkColors, lightColors, violetColors } from '../../config/colors';

// Navbar positions
export const NavbarContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

// Toggle theme
export const NavbarToggleTheme = styled.button`
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;

  background: ${(props) =>
    (props.theme.mode === 'light' && lightColors.background.toggle_keypad) ||
    (props.theme.mode === 'dark' && darkColors.background.toggle_keypad) ||
    (props.theme.mode === 'violet' &&
      violetColors.background.toggle_keypad_screen)};
  color: ${(props) =>
    (props.theme.mode === 'light' && lightColors.text.grayish) ||
    (props.theme.mode === 'dark' && darkColors.text.white) ||
    (props.theme.mode === 'violet' && violetColors.text.light_yellow)};
`;
