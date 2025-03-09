import { AppContextState } from '../shared/models';
import { APP_REDUCER_ACTION_TYPE } from './AppContext.reducer.constants.ts';

export interface IAppSettingsReducerAction {
    type: APP_REDUCER_ACTION_TYPE;
    payload: AppContextState;
}

export const AppSettingsReducer = (
    prevState: AppContextState,
    action: IAppSettingsReducerAction
): AppContextState => {
    const { type, payload } = action;
    switch (type) {
        case APP_REDUCER_ACTION_TYPE.CHANGE_APP_VIEW:
            return {
                ...prevState,
                view: payload.view,
                animationToTop: payload.animationToTop,
            };
        default:
            return prevState;
    }
};
