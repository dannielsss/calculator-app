import { ThemeState } from './types';

// Initial state for theme context
export const INITIAL_STATE: ThemeState = {
  theme: window.localStorage.getItem('theme') || 'light',
  dispatch: () => null,
};
