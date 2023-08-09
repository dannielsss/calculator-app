import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../../constants';
import { Themes } from '../../types';

// For global style similar to index.css
export const GlobalStyle = createGlobalStyle<{ theme?: { mode: Themes } }>`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    font-size: 32px;
    background: ${(props) => COLORS[props.theme.mode].mainBackground};
    color: ${(props) => COLORS[props.theme.mode].mainText};
  }
`;
