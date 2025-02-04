import { APP_REDUCER_ACTION_TYPE } from "../../storage/AppContext.reducer";
import { APP_VIEW } from "../enums/AppView.enum";

export interface AppContextState {
    version: string;
    view: APP_VIEW;
}

export interface AppContextModel {
    state: AppContextState;
    setState: (state: AppContextState, type: APP_REDUCER_ACTION_TYPE) => void;
}
