import React from 'react';
import { FiAlertOctagon } from 'react-icons/fi';

import './style.css'

function FooterCadastro() {
    return (
        <div className="cadastro-usuario-footer" >
            <div className="cadastro-usuario-footer-alert">
                <FiAlertOctagon color="#8257E5" size="35" style={{ alignSelf: 'flex-start' }} />
                <p className="cadastro-usuario-footer-text">Importante! Preencha todos os dados</p>
            </div>
            <button className="cadastro-usuario-footer-button">Salvar Cadastro</button>
        </div>
    )
}

export default FooterCadastro;