import React, { useState } from 'react';

import { Home } from './pages/Home.page';
import { AppContextModel } from './shared/models';
import { AppContext } from './storage/App.context';
import { appContextDefault } from './storage/App.context.default';

export const App = () => {
    const [ state ] = useState<AppContextModel>(appContextDefault);
    return (
        <AppContext.Provider
            value={state}
        >
            <div className="App">
                <Home></Home>
            </div>
        </AppContext.Provider>
    );
}
