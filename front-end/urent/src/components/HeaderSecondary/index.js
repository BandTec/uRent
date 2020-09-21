import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';

function HeaderSecondary({ title }) {
	return (
		<div>
			<div className="header-secondary">
				<div className="header-nav">
					<Link to="/"><FiArrowLeft color="#fff" size="30" /></Link>
				</div>
				<div className="header-title">
					<h1 style={{ fontSize: '16px', color: '#fff', fontWeight: '400' }}>{title}</h1>
				</div>
			</div>
			<div className="section-header">
				<div className="section-header-text">
					{title === 'Cadastro' ?
						<div>
							<h1>Vamos nos conhecer um pouquinho?</h1>
							<h3>O primeiro passo, é preencher esse formulário de inscrição.</h3>
						</div>
						: title === 'Anunciar' ?
							<div>
								<h1>Que bom que quer anunciar conosco!</h1>
								<h3>Antes precisamos saber um pouco sua garagem.</h3>
							</div>
							:
							<div>
								<h1>Que bom que quer alugar uma garagem!</h1>
								<h3>Precisamos de apenas algumas informações sobre o veículo que você irá guardar.</h3>
							</div>
					}
				</div>
			</div>
		</div>
	)
}


export default HeaderSecondary;