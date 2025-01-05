import { APP_VIEW } from "../shared/enums/AppView.enum";
import { AppContextState } from "../shared/models";

export const appContextDefault: AppContextState = {
    version: "0.0.1",
    view: APP_VIEW.HOME
}