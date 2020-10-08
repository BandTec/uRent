import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../src/assets/logo-simple.png';

import * as S from './style';

function Header() {
	return (
		<S.Header>
			<S.HeaderLogo>
				<img src={logo} alt="Logo uRent" style={{ width: '60px' }}/>
			</S.HeaderLogo>
			<S.HeaderNavMenu>
				<S.ButtonMenu>Sobre nós</S.ButtonMenu>
			</S.HeaderNavMenu>
			<S.HeaderNav>		
				<Link to="">
				<S.ButtonBlue>Entrar</S.ButtonBlue>
				</Link>
			</S.HeaderNav>
		</S.Header>
	)
}

export default Header;