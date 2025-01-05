import { createContext } from 'react';

import { AppContextModel } from '../shared/models';
import { appContextDefault } from './App.context.default';

export const AppContext = createContext<AppContextModel>(appContextDefault);
