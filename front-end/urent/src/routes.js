import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/Index/index';
import CadastroUsuario from './pages/Cadastros/CadastroUsuario/index';
import CadastroGaragem from './pages/Cadastros/CadastroGaragem/index';
import CadastroVeiculo from './pages/Cadastros/CadastroVeiculo/index';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/cadastro" component={CadastroUsuario} />
                <Route path="/cadastro-garagem" component={CadastroGaragem} />
                <Route path="/cadastro-veiculo" component={CadastroVeiculo} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;