import { Dispatch } from 'react';

/**
 * Types for theme context
 */

export type Themes = 'dark' | 'light' | 'violet';
export type Action = { type: 'TOGGLE_THEME'; payload: Themes };

export interface ThemeState {
  theme: Themes;
  dispatch: Dispatch<Action>;
}
