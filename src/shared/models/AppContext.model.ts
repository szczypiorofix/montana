import { APP_VIEW } from "../enums/AppView.enum";

export interface AppContextModel {
    version: string;
    view: APP_VIEW;
    togleView: (view: APP_VIEW) => void;
}
