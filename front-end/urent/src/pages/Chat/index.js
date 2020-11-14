import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi'
import * as S from './style';

import HeaderAnuncio from '../../components/HeaderAnuncio/index';
import api from '../../service/api';

// import usuario from '../../assets/usuario.png';

function Index() {

	const [usuario, setUsuario] = useState('');
	const [endereco, setEndereco] = useState('');

	const history = useHistory();

	useEffect(() => {

		api.get('usuarios/status')
			.catch(() => {
				history.push('/login')
			})

		const id = sessionStorage.getItem('id');

		api.get(`usuarios/${id}`)
			.then(response => {
				setUsuario(response.data)

				api.get(`https://viacep.com.br/ws/${response.data.cep}/json/`)
					.then(response => {
						setEndereco(response.data)
					})

			})
			.catch(error => {
				console.log(error)
			})


	}, []);

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
						<S.FotoPerfil src={usuario} alt="Foto de perfil" />
					</div>

					<div>
						<h3>{usuario.nome}</h3>
						<h3 style={{ fontWeight: 'lighter' }}>Status</h3>
					</div>

					<div>
						<S.DataTopic style={{ fontWeight: '700' }}>Rua: <S.Data>{endereco.logradouro}</S.Data> </S.DataTopic>
						<S.DataTopic style={{ fontWeight: '700' }}>CEP: <S.Data>{endereco.cep}</S.Data> </S.DataTopic>
						<S.DataTopic style={{ fontWeight: '700' }}>Bairro: <S.Data>{endereco.bairro}</S.Data> </S.DataTopic>
						<S.DataTopic style={{ fontWeight: '700' }}>Cidade: <S.Data>{endereco.localidade}</S.Data> </S.DataTopic>
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