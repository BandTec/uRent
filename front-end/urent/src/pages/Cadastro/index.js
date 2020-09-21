import React from 'react';

import FooterCadastro from '../../components/FooterCadastro/index';
import HeaderSecondary from '../../components/HeaderSecondary/index';

import './style.css'

function Cadastro() {
	return (
		<div className="cadastro-usuario">
			<HeaderSecondary title="Cadastro" />
			<div className="cadastro-usuario-container">
				<h1>Seus Dados</h1>
				<div style={{ width: '100%' }}>
					<label className="cadastro-usuario-label">Nome Completo</label>
					<input className="cadastro-usuario-input" />
				</div>
				<div className="cadastro-usuario-content">
					<div className="cadastro-usuario-content-content">
						<label className="cadastro-usuario-label">CPF</label>
						<input className="cadastro-usuario-input" style={{ width: '94%' }} />
					</div>
					<div className="cadastro-usuario-content-content">
						<label className="cadastro-usuario-label">Data Nascimento</label>
						<input className="cadastro-usuario-input" style={{ width: '94%' }} />
					</div>
				</div>
				<div className="cadastro-usuario-content">
					<div className="cadastro-usuario-content-content">
						<label className="cadastro-usuario-label">Contato</label>
						<input className="cadastro-usuario-input" style={{ width: '94%' }} />
					</div>
					<div className="cadastro-usuario-content-content">
						<label className="cadastro-usuario-label">CEP</label>
						<input className="cadastro-usuario-input" style={{ width: '94%' }} />
					</div>
				</div>
				<div style={{ width: '100%' }}>
					<label className="cadastro-usuario-label">E-mail</label>
					<input className="cadastro-usuario-input" />
				</div>
				<div style={{ width: '48%' }}>
					<label className="cadastro-usuario-label">Senha</label>
					<input className="cadastro-usuario-input" />
				</div>
			<FooterCadastro />
			</div>
		</div>

	)
}

export default Cadastro;