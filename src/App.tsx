import React, { useState } from 'react';

import { About, Contact, Home, Projects } from './pages';
import { APP_VIEW } from './shared/enums/AppView.enum';
import { AppContextModel } from './shared/models';
import { AppContext } from './storage/App.context';
import { appContextDefault } from './storage/App.context.default';
import { NavComponent } from './components/nav.component';

export const App = (): React.JSX.Element => {
    const [ state ] = useState<AppContextModel>(appContextDefault);
    const appViewResolver = (): React.JSX.Element => {
        switch(state.view) {
            case APP_VIEW.CONTACT:
                return <Contact></Contact>
            case APP_VIEW.PROJECTS:
                return <Projects></Projects>
            case APP_VIEW.ABOUT:
                return <About></About>
            default: // Home
                return <Home></Home>
        }
    }
    return (
        <AppContext.Provider
            value={state}
        >
            <div>
                <NavComponent></NavComponent>
            </div>
            <div className="App">
                { appViewResolver() }
            </div>
        </AppContext.Provider>
    );
}
