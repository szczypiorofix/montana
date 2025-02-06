import { APP_VIEW, APP_VIEW_LENGTH } from '../enums';

export function getNextAppView(currentAppView: APP_VIEW): APP_VIEW {
    if (currentAppView < APP_VIEW_LENGTH) {
        return currentAppView + 1;
    }
    return currentAppView;
}

export function getPreviousAppView(currentAppView: APP_VIEW): APP_VIEW {
    if (currentAppView > 0) {
        return currentAppView - 1;
    }
    return currentAppView;
}
