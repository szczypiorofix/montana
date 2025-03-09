import { test, expect } from 'vitest';
import { APP_VIEW } from '../enums';
import { getNextAppView, getPreviousAppView } from './AppViewResolver';

test('should return next application view for Home as Projects', () => {
    const currentApplicationView: APP_VIEW = APP_VIEW.HOME;
    const nextApplicationView: APP_VIEW = getNextAppView(
        currentApplicationView
    );
    expect(nextApplicationView).toBe(APP_VIEW.PROJECTS);
});

test('should return previous application view for Projects as Home', () => {
    const currentApplicationView: APP_VIEW = APP_VIEW.PROJECTS;
    const previousApplicationView: APP_VIEW = getPreviousAppView(
        currentApplicationView
    );
    expect(previousApplicationView).toBe(APP_VIEW.HOME);
});
