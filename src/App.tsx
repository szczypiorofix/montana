import React, { useState } from 'react';

import { NavComponent } from './components/nav.component';
import { NavList } from './models';
import { About, Contact, Home, Projects } from './pages';
import { APP_VIEW } from './shared/enums/AppView.enum';
import { AppContextModel } from './shared/models';
import { AppContext } from './storage/App.context';
import { appContextDefault } from './storage/App.context.default';

const navList: NavList = {
    active: true,
    items: [
        {
            id: 0,
            name: "Strona główna"
        },
        {
            id: 1,
            name: "Projekty"
        },
        {
            id: 2,
            name: "O mnie"
        },
        {
            id: 3,
            name: "Kontakt"
        }
    ]
}

export const App = (): React.JSX.Element => {
    const [state, setState] = useState<AppContextModel>({
        ...appContextDefault,
        togleView(view) {
            setState({
                ...state,
                view: view
            })
        },
    });
    
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
                <NavComponent
                    list={navList}
                />
            </div>
            <div className="App">
                { appViewResolver() }
            </div>
        </AppContext.Provider>
    );
}
