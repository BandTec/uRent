import React from 'react';

import logo from '../../assets/logo.svg';

import './style.css';

function Header() {
	return (
		<div className="header">
			<div className="header-logo">
				<img src={logo} alt="Logo uRent" />
			</div>
			<div className="header-nav">
				<button className="header-button-light">Cadastre-se</button>
				<button className="header-button-blue">Entrar</button>
			</div>
		</div>
	)
}

export default Header;