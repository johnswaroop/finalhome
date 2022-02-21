import React from 'react';
import Server from './Components/server/index';
import MainScreen from './Main/index';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Switch >
                <Route exact path={'/server'}>
                    <Server />
                </Route>
                <Route exact path={'/'}>
                    <MainScreen
                     />
                </Route>
                
            </Switch>

        </BrowserRouter>
    )
}

export default App
