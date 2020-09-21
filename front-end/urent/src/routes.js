import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/index/index';
import Cadastro from './pages/Cadastro/index';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/cadastro" component={Cadastro} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;