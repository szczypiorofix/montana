import React, { useReducer } from 'react';

import { NavComponent } from './components/nav/Nav.component';
import { NavList } from './models';
import { About, Contact, Home, Projects } from './pages';
import { APP_VIEW } from './shared/enums/AppView.enum';
import { AppContext } from './storage/AppContext';
import { appContextDefault } from './storage/AppContext.default';
import { AppSettingsReducer } from './storage/AppContext.reducer';
import { HeaderComponent } from "./components/header/Header.component";

import logo from './logo.png';
import { ViewPortComponent } from "./components/viewport/ViewPort.component";
import { InnerContentComponent } from "./components/inner-content/InnerContenr.component";
import {ContentWrapperComponent} from "./components/content-wrapper/ContentWrapper.component";

const navList: NavList = {
    active: true,
    items: [
        {
            id: APP_VIEW.HOME,
            name: "Strona główna"
        },
        {
            id: APP_VIEW.PROJECTS,
            name: "Projekty"
        },
        {
            id: APP_VIEW.ABOUT,
            name: "O mnie"
        },
        {
            id: APP_VIEW.CONTACT,
            name: "Kontakt"
        }
    ]
}

export const App = (): React.JSX.Element => {  
    const [ state, dispatch ] = useReducer(AppSettingsReducer, appContextDefault);

    const appViewResolver = (): React.JSX.Element => {
        switch (state.view) {
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
            value={{
                state: state,
                setState(_state, _type) {
                    dispatch(
                        {
                            type: _type,
                            payload: _state
                        }
                    )
                },
            }}
        >
            <ViewPortComponent>
                <HeaderComponent
                    logo={ logo }
                />
                <ContentWrapperComponent>
                    <NavComponent
                        list={navList}
                    />
                    <InnerContentComponent>
                        { appViewResolver() }
                    </InnerContentComponent>
                </ContentWrapperComponent>
            </ViewPortComponent>
        </AppContext.Provider>
    );
}
