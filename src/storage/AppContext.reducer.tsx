import React from 'react';

import { getNextAppView, getPreviousAppView } from '../shared/helpers';
import { AppContextModel, AppContextState } from '../shared/models';

export enum APP_REDUCER_ACTION_TYPE {
    CHANGE_APP_VIEW,
}

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
            return { ...prevState, view: payload.view };
        default:
            return prevState;
    }
};

export const getAppContextProviderValue: (
    state: AppContextState,
    dispatch: React.Dispatch<IAppSettingsReducerAction>
) => AppContextModel = (
    state: AppContextState,
    dispatch: React.Dispatch<IAppSettingsReducerAction>
): AppContextModel => {
    return {
        state: state,
        setState(_state, _type) {
            dispatch({ type: _type, payload: _state });
        },
        setAppView(_state) {
            dispatch({
                type: APP_REDUCER_ACTION_TYPE.CHANGE_APP_VIEW,
                payload: {
                    ..._state,
                    view: _state.view,
                } as AppContextState,
            });
        },
        setNextAppView(_state) {
            dispatch({
                type: APP_REDUCER_ACTION_TYPE.CHANGE_APP_VIEW,
                payload: {
                    ..._state,
                    view: getNextAppView(_state.view),
                },
            });
        },
        setPrevAppView(_state) {
            dispatch({
                type: APP_REDUCER_ACTION_TYPE.CHANGE_APP_VIEW,
                payload: {
                    ..._state,
                    view: getPreviousAppView(_state.view),
                },
            });
        },
    };
};
