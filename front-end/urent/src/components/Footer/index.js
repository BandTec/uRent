import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';

function Footer() {
	return (
		<S.Footer>
			<div>
				<S.FooterTitle>Sobre</S.FooterTitle>
				<Link to="/institucional" style={{ textDecoration: 'none', color: '#000' }}>
					<S.FooterText>Como a URENT funciona?</S.FooterText>
				</Link>
				<Link to="/institucional" style={{ textDecoration: 'none', color: '#000' }}>
					<S.FooterText>Conheça nossa Equipe</S.FooterText>
				</Link>
			</div>
			<div>
				<S.FooterTitle>Dúvidas</S.FooterTitle>
				<Link to="/duvidas" style={{ textDecoration: 'none', color: '#000' }}>
					<S.FooterText>Acesse dúvidas frequentes</S.FooterText>
				</Link>
			</div>
			<div>
				<S.FooterTitle>Precisa de um help?</S.FooterTitle>
				<S.FooterText>Entre em contato conosco, através</S.FooterText>
				<S.FooterText>do nosso e-mail:</S.FooterText>
			</div>
		</S.Footer>
	)
}

export default Footer;