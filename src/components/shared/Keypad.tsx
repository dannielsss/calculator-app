import { css, styled } from 'styled-components';
import { COLORS } from '../../constants';
import { Themes } from '../../types';

// Container for keypads
export const KeypadContainer = styled.div<{ theme?: { mode: Themes } }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  place-items: center;
  gap: 1rem;

  border-radius: 10px;
  padding: 1.5rem;
  width: 100%;

  background: ${(props) => COLORS[props.theme.mode].keypadBackground};
`;

// Button numbers
interface KeypadProps {
  theme?: {
    mode: 'light' | 'dark' | 'violet';
  };
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
  transition: 0.02s ease-in;

  grid-column: ${(props) =>
    (props.resetButton && '1/ 3') || (props.resultButton && '3/ 5')};

  color: ${(props) => COLORS[props.theme.mode].buttonText};
  background: ${(props) => COLORS[props.theme.mode].keysBackground};
  box-shadow: 0px 4px 0px ${(props) => COLORS[props.theme.mode].keysShadow};

  ${(props) => {
    if (props.deleteButton || props.resetButton)
      return css`
        font-size: 25px;
        color: ${COLORS[props.theme.mode].deleteButtonTextColor};
        background: ${COLORS[props.theme.mode].deleteButtonBackground};
        box-shadow: 0px 4px 0px ${COLORS[props.theme.mode].deleteButtonShadow};
      `;

    if (props.resultButton)
      return css`
        font-size: 25px;
        color: ${COLORS[props.theme.mode].resultButtonTextColor};
        background: ${COLORS[props.theme.mode].resultButtonBackground};
        box-shadow: 0px 4px 0px ${COLORS[props.theme.mode].resultButtonShadow};
      `;
  }}

  &:hover {
    transform: scale(1.08);
    cursor: pointer;
    transition: 0.05s ease-in;
  }
`;
