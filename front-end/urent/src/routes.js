import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/Index/index';
import CadastroUsuario from './pages/Cadastros/CadastroUsuario/index';
import CadastroGaragem from './pages/Cadastros/CadastroGaragem/index';
import CadastroVeiculo from './pages/Cadastros/CadastroVeiculo/index';
import DuvidasFrequentes from './pages/DuvidasFrequentes';
import Login from './pages/Login';
import FormularioAnuncio from './pages/Cadastros/FormularioAnuncio/index';
import Alugar from './pages/Alugar/index';
import Feed from './pages/Feed/index';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/cadastro" component={CadastroUsuario} />
                <Route path="/cadastro-garagem" component={CadastroGaragem} />
                <Route path="/cadastro-veiculo" component={CadastroVeiculo} />
                <Route path="/duvidas" component={DuvidasFrequentes} />
                <Route path="/login" component={Login} />
                <Route path="/formulario-anuncio" component={FormularioAnuncio} />
                <Route path="/alugar" component={Alugar} />
                <Route path="/feed" component={Feed} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;