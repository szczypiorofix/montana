import { createContext, useContext } from 'react';

import { AppContextModel } from '../shared/models';
import { appContextDefault } from './AppContext.default';

export const AppContext = createContext<AppContextModel>({
    state: appContextDefault,
    setState: () => {}
});

export const useGlobalAppContext = () => useContext(AppContext)
