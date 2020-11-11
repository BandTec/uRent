import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import * as S from './style';

function Header() {
	return (

		<S.Header>

			<S.HeaderLogo>
				<img src={logo} alt="Logo uRent" />
			</S.HeaderLogo>

			<S.HeaderNav>		
				<Link to="/cadastro">
					<S.ButtonLight>Cadastre-se</S.ButtonLight>
				</Link>
				<Link to="/login">
					<S.ButtonBlue>Entrar</S.ButtonBlue>
				</Link>
				
			</S.HeaderNav>

		</S.Header>
	)
}

export default Header;