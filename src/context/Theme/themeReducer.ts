import { Action, ThemeState } from './types';

// Reducer actions for theme context
export const themeReducer = (state: ThemeState, action: Action): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: action.payload };
    default:
      return { ...state };
  }
};
