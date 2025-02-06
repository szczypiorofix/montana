import { useReducer } from 'react';

import { CogWheelComponent } from './components/cogwheel/CogWheel.component';
import { ContentWrapperComponent } from './components/content-wrapper/ContentWrapper.component';
import { HeaderComponent } from './components/header/Header.component';
import { InnerContentComponent } from './components/inner-content/InnerContenr.component';
import { NavComponent } from './components/nav/Nav.component';
import { ViewPortComponent } from './components/viewport/ViewPort.component';
import logo from './assets/logo.png';
import { NavList } from './models';
import { About, Contact, Home, Projects } from './pages';
import { APP_VIEW } from './shared/enums';
import { JSXElement } from './shared/models';
import { AppContext } from './storage/AppContext';
import { appContextDefault } from './storage/AppContext.default';
import { AppSettingsReducer } from './storage/AppContext.reducer';
import { getAppContextProviderValue } from './storage/AppContext.provider.ts';

const navList: NavList = {
    active: true,
    items: [
        {
            id: APP_VIEW.HOME,
            name: 'Strona główna',
        },
        {
            id: APP_VIEW.PROJECTS,
            name: 'Projekty',
        },
        {
            id: APP_VIEW.ABOUT,
            name: 'O mnie',
        },
        {
            id: APP_VIEW.CONTACT,
            name: 'Kontakt',
        },
    ],
};

export const App: () => JSXElement = (): JSXElement => {
    const [state, dispatch] = useReducer(AppSettingsReducer, appContextDefault);

    const appViewResolver: () => JSXElement = (): JSXElement => {
        switch (state.view) {
            case APP_VIEW.CONTACT:
                return <Contact></Contact>;
            case APP_VIEW.PROJECTS:
                return <Projects></Projects>;
            case APP_VIEW.ABOUT:
                return <About></About>;
            default: // Home
                return <Home></Home>;
        }
    };

    return (
        <AppContext.Provider
            value={getAppContextProviderValue(state, dispatch)}
        >
            <CogWheelComponent />
            <ViewPortComponent>
                <HeaderComponent logo={logo} />
                <ContentWrapperComponent>
                    <NavComponent list={navList} visible={true} />
                    <InnerContentComponent>
                        {appViewResolver()}
                    </InnerContentComponent>
                </ContentWrapperComponent>
            </ViewPortComponent>
        </AppContext.Provider>
    );
};
