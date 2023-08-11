import { styled } from 'styled-components';
import { COLORS } from '../../constants';
import { Themes } from '../../types';

// Style for screen calculator
export const Screen = styled.div<{ theme?: { mode: Themes } }>`
  padding: 2rem 1rem;
  border-radius: 5px;
  text-align: end;
  width: 100%;
  height: 93px;

  background: ${(props) => COLORS[props.theme.mode].screenBackground};
`;
