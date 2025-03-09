import { AppContextModel, AppContextState } from '../shared/models';
import React from 'react';
import { APP_REDUCER_ACTION_TYPE } from './AppContext.reducer.constants.ts';
import { getNextAppView, getPreviousAppView } from '../shared/helpers';
import { IAppSettingsReducerAction } from './AppContext.reducer.tsx';

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
                    animationToTop: true,
                },
            });
        },
        setPrevAppView(_state) {
            dispatch({
                type: APP_REDUCER_ACTION_TYPE.CHANGE_APP_VIEW,
                payload: {
                    ..._state,
                    view: getPreviousAppView(_state.view),
                    animationToTop: false,
                },
            });
        },
    };
};
