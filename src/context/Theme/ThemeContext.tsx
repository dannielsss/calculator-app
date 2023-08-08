import { createContext } from 'react';

import { INITIAL_STATE } from './constants';
import { ThemeState } from './types';

// Create context
export const ThemeContext = createContext<ThemeState>(INITIAL_STATE);
