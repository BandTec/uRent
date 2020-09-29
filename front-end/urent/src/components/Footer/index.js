import React from 'react';

import * as S from './style';

function Footer() {
	return (
		<S.Footer>
			<div>
				<S.FooterTitle>Sobre</S.FooterTitle>
				<S.FooterText>Como a URENT funciona?</S.FooterText>
				<S.FooterText>Conheça nossa Equipe</S.FooterText>
			</div>
			<div>
				<S.FooterTitle>Dúvidas</S.FooterTitle>
				<S.FooterText>Acesse dúvidas frequentes</S.FooterText>
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