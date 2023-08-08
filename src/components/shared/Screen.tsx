import { styled } from 'styled-components';
import { darkColors, lightColors, violetColors } from '../../config/colors';

// Style for screen calculator
export const Screen = styled.div`
  padding: 2rem 1rem;
  border-radius: 5px;
  text-align: end;
  width: 100%;

  background: ${(props) =>
    (props.theme.mode === 'light' && lightColors.background.screen) ||
    (props.theme.mode === 'dark' && darkColors.background.screen) ||
    (props.theme.mode === 'violet' &&
      violetColors.background.toggle_keypad_screen)};
`;