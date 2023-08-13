import { Dispatch } from 'react';
import { Themes } from '../../types';

/**
 * Types for theme context
 */
export type Action = { type: 'TOGGLE_THEME'; payload: Themes };

export interface ThemeState {
  theme: string;
  dispatch: Dispatch<Action>;
}
