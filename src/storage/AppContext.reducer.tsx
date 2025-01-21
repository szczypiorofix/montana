import { AppContextState } from "../shared/models";

export enum APP_REDUCER_ACTION_TYPE {
    CHANGE_APP_VIEW,
}

export interface IAppSettingsReducerAction {
    type: APP_REDUCER_ACTION_TYPE;
    payload: AppContextState;
}

export const AppSettingsReducer = ( prevState: AppContextState , action: IAppSettingsReducerAction ): AppContextState => {
    const { type, payload } = action;
    switch( type ) {
        case APP_REDUCER_ACTION_TYPE.CHANGE_APP_VIEW:
            console.log(`Changing view from ${ prevState.view} to ${ payload.view}`);
            return { ...prevState, view: payload.view };
        default:
            return prevState;
    }
};
