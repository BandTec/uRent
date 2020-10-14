import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/Index/index';
import CadastroUsuario from './pages/Cadastros/CadastroUsuario/index';
import CadastroGaragem from './pages/Cadastros/CadastroGaragem/index';
import CadastroVeiculo from './pages/Cadastros/CadastroVeiculo/index';
import DuvidasFrequentes from './pages/DuvidasFrequentes';
import Login from './pages/Login';
import FormularioAnuncio from './pages/FormularioAnuncio/index';
import MeusAnuncios from './pages/MeusAnuncios/index';
import Institucional from './pages/Institucional/index';
import Feed from './pages/Feed/index';
import Alugar from './pages/Alugar/index';
import Perfil from './pages/Perfil/index';

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
                <Route path="/meus-anuncios" component={MeusAnuncios} />
                <Route path="/institucional" component={Institucional} />
                <Route path="/feed" component={Feed} />
                <Route path="/alugar" component={Alugar} />
                <Route path="/perfil" component={Perfil} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;