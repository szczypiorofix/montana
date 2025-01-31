import { createContext, useContext } from 'react';

import { AppContextModel } from '../shared/models';
import { appContextDefault } from './AppContext.default';

export const AppContext = createContext<AppContextModel>({
    state: appContextDefault,
    setState: (): void => {},
    setAppView: (): void => {},
    setNextAppView: (): void => {},
    setPrevAppView: (): void => {},
});

export const useGlobalAppContext = () => useContext(AppContext);
