import { css, styled } from 'styled-components';
import { darkColors, lightColors, violetColors } from '../../config/colors';

// Container for keypads
export const KeypadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  place-items: center;
  gap: 1rem;

  border-radius: 10px;
  padding: 1rem;
  width: 100%;

  background: ${(props) =>
    (props.theme.mode === 'light' && lightColors.background.toggle_keypad) ||
    (props.theme.mode === 'dark' && darkColors.background.toggle_keypad) ||
    (props.theme.mode === 'violet' &&
      violetColors.background.toggle_keypad_screen)};
`;

// Button numbers
interface KeypadProps {
  deleteButton?: boolean;
  resetButton?: boolean;
  resultButton?: boolean;
}

export const Keypad = styled.button<KeypadProps>`
  border: none;
  width: 100%;
  height: 50px;
  font-size: 32px;
  font-weight: 700;
  border-radius: 5px;

  grid-column: ${(props) =>
    (props.resetButton && '1/ 3') || (props.resultButton && '3/ 5')};

  color: ${(props) =>
    (props.theme.mode === 'light' && lightColors.text.grayish) ||
    (props.theme.mode === 'dark' && darkColors.text.grayish) ||
    (props.theme.mode === 'violet' && violetColors.text.light_yellow)};

  background: ${(props) =>
    (props.theme.mode === 'light' && lightColors.keys.grayish.background) ||
    (props.theme.mode === 'dark' && darkColors.keys.white.background) ||
    (props.theme.mode === 'violet' &&
      violetColors.keys.very_dark_violet.background)};

  box-shadow: 0px 4px 0px
    ${(props) =>
      (props.theme.mode === 'light' && lightColors.keys.grayish.shadow) ||
      (props.theme.mode === 'dark' && darkColors.keys.white.shadow) ||
      (props.theme.mode === 'violet' &&
        violetColors.keys.very_dark_violet.shadow)};

  ${(props) => {
    if (props.deleteButton || props.resetButton)
      return css`
        font-size: 25px;
        color: ${(props) =>
          (props.theme.mode === 'light' && lightColors.text.white) ||
          (props.theme.mode === 'dark' && darkColors.text.white) ||
          (props.theme.mode === 'violet' && violetColors.text.white)};

        background: ${(props) =>
          (props.theme.mode === 'light' && lightColors.keys.cyan.background) ||
          (props.theme.mode === 'dark' && darkColors.keys.blue.background) ||
          (props.theme.mode === 'violet' &&
            violetColors.keys.dark_violet.background)};

        box-shadow: 0px 4px 0px
          ${(props) =>
            (props.theme.mode === 'light' && lightColors.keys.cyan.shadow) ||
            (props.theme.mode === 'dark' && darkColors.keys.blue.shadow) ||
            (props.theme.mode === 'violet' &&
              violetColors.keys.dark_violet.shadow)};
      `;

    if (props.resultButton)
      return css`
        font-size: 25px;
        color: ${(props) =>
          (props.theme.mode === 'light' && lightColors.text.white) ||
          (props.theme.mode === 'dark' && darkColors.text.white) ||
          (props.theme.mode === 'violet' && violetColors.text.dark_blue)};

        background: ${(props) =>
          (props.theme.mode === 'light' &&
            lightColors.keys.orange.background) ||
          (props.theme.mode === 'dark' && darkColors.keys.red.background) ||
          (props.theme.mode === 'violet' && violetColors.keys.cyan.background)};

        box-shadow: 0px 4px 0px
          ${(props) =>
            (props.theme.mode === 'light' && lightColors.keys.orange.shadow) ||
            (props.theme.mode === 'dark' && darkColors.keys.red.shadow) ||
            (props.theme.mode === 'violet' && violetColors.keys.cyan.shadow)};
      `;
  }}
`;
