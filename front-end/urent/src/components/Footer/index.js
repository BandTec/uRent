import React from 'react';

import './style.css';

function Footer() {
	return (
		<div className="footer">
			<div className="footer-content">
				<h1 className="footer-title">Sobre</h1>
				<p className="footer-text">Como a URENT funciona?</p>
				<p className="footer-text">Conheça nossa Equipe</p>
			</div>
			<div className="footer-content">
				<h1 className="footer-title">Dúvidas</h1>
				<p className="footer-text">Acesse dúvidas frequentes</p>
			</div>
			<div className="footer-content">
				<h1 className="footer-title">Precisa de um help?</h1>
				<p className="footer-text">Entre em contato conosco, através</p>
				<p className="footer-text">do nosso e-mail:</p>
			</div>
		</div>
	)
}

export default Footer;