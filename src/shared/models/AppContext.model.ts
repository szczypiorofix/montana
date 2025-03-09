import { APP_VIEW } from '../enums';
import { APP_REDUCER_ACTION_TYPE } from '../../storage/AppContext.reducer.constants.ts';

export interface AppContextState {
    version: string;
    reload: boolean;
    view: APP_VIEW;
    animationToTop: boolean;
}

export interface AppContextModel {
    state: AppContextState;
    setState: (state: AppContextState, type: APP_REDUCER_ACTION_TYPE) => void;
    setAppView: (state: AppContextState) => void;
    setNextAppView: (state: AppContextState) => void;
    setPrevAppView: (state: AppContextState) => void;
}
