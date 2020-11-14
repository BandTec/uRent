import React from 'react';

import HeaderAnuncio from '../../components/HeaderAnuncio/index';
import { FiArrowLeft } from 'react-icons/fi'

import * as S from './style';

import usuario from '../../assets/usuario.png';


function Index() {
	return (
		<>
			<HeaderAnuncio />

			<S.Back>
				<FiArrowLeft size={30} />
			</S.Back>

			<S.Section>
				<S.Header>
					<h1 style={{ marginLeft: '3%' }}>Chat</h1>
				</S.Header>

				<S.Nav>
				<div>
					<S.FotoPerfil src={usuario}  />
				</div>

					<div>
						<h2>Nome</h2>
						<h3 style={{ fontWeight: 'lighter' }}>Status</h3>
					</div>

					<div>
						<p style={{ fontWeight: '700' }}>Rua: <span>nome da rua</span> </p>
						<p style={{ fontWeight: '700' }}>CEP: <span>nome da rua</span> </p>
						<p style={{ fontWeight: '700' }}>Bairro: <span>nome da rua</span> </p>
						<p style={{ fontWeight: '700' }}>Cidade: <span>nome da rua</span> </p>
					</div>
				</S.Nav>

				<S.Content>
					<S.InputMessege placeholder="Digite uma mensagem" />
				</S.Content>

			</S.Section>


		</>
	)
}

export default Index;