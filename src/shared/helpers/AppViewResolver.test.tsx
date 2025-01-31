import { APP_VIEW } from '../enums';
import { getNextAppView } from './AppViewResolver';

describe('AppViewResolver', function () {
    it('should return next application view for Home as Projects', function () {
        const currentApplicationView: APP_VIEW = APP_VIEW.HOME;
        const nextApplicationView: APP_VIEW = getNextAppView(
            currentApplicationView
        );
        expect(nextApplicationView).toBe(APP_VIEW.PROJECTS);
    });
});
