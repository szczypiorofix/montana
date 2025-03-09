import { APP_VIEW } from '../shared/enums';
import { AppContextState } from '../shared/models';

export const appContextDefault: AppContextState = {
    version: '0.0.2',
    reload: false,
    view: APP_VIEW.HOME,
    animationToTop: false,
};
