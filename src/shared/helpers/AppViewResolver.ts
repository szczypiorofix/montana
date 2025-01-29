import { APP_VIEW, APP_VIEW_LENGTH } from "../enums";

export function getNextAppView(currentAppView: APP_VIEW): APP_VIEW {
    // let nextAppView = currentAppView + 1;
    // if (nextAppView > APP_VIEW_LENGTH) {
    //     nextAppView = APP_VIEW.HOME;
    // }
    // return nextAppView;
    if (currentAppView < APP_VIEW_LENGTH) {
        return currentAppView + 1;
    }
    return currentAppView;
}

export function getPreviousAppView(currentAppView: APP_VIEW): APP_VIEW {
    // let nextAppView = currentAppView - 1;
    // if (nextAppView < 0) {
    //     nextAppView = APP_VIEW.CONTACT;
    // }
    // return nextAppView;
    if (currentAppView > 0) {
        return currentAppView - 1;
    }
    return currentAppView;
}
