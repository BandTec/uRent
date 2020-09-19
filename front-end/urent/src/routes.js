import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/index/index';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;