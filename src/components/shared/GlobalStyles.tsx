import { createGlobalStyle } from 'styled-components';
import { darkColors, lightColors, violetColors } from '../../config/colors';

// For global style similar to index.css
export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) =>
      (props.theme.mode === 'light' && lightColors.background.main) ||
      (props.theme.mode === 'dark' && darkColors.background.main) ||
      (props.theme.mode === 'violet' && violetColors.background.main)};
    color: ${(props) =>
      (props.theme.mode === 'light' && lightColors.text.grayish) ||
      (props.theme.mode === 'dark' && darkColors.text.white) ||
      (props.theme.mode === 'violet' && violetColors.text.white)};
  }
`;
