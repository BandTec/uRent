import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';

import { FiArrowLeft } from 'react-icons/fi';
import { MdSend } from 'react-icons/md';

import * as S from './style';
import './style.css';

import HeaderAnuncio from '../../components/HeaderAnuncio/index';
import api from '../../service/api';

// import usuario from '../../assets/usuario.png';

const socket = io.connect('http://localhost:5000');

function Index() {

	const [message, setMessage] = useState('');
	// const [chat, setChat] = useState([]);

	const [usuario, setUsuario] = useState('');
	const [endereco, setEndereco] = useState('');

	const history = useHistory();

	function enviar(e) {
		e.preventDefault();
		socket.emit('message', {'message': message, 'nome': usuario.nome})
		setMessage('');
	}

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

	useEffect(() => {
		socket.on('message', message => {
			let list = document.getElementById('lista');
			let item = document.createElement('li');
			let nome = document.createElement('span');
			let mensagem = document.createElement('span');
			
			nome.innerHTML = message.nome + ": "; 
			mensagem.innerHTML = message.message;
			
			nome.style.color = "#fff";
			nome.style.fontWeight = "500";
			mensagem.style.color = "#fff";
			
			item.appendChild(nome);
			item.appendChild(mensagem);
			list.appendChild(item);
		})
	}, [])

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
					<S.Messeges>
						<ul id="lista" className="lista"></ul>
					</S.Messeges>
					<form onSubmit={enviar} style={{ display: 'flex' }}>
						<S.InputMessege placeholder="Digite uma mensagem" value={message} onChange={e => setMessage(e.target.value)} />
						<S.ButtonSend>
							<MdSend color={'0752DE'} size={25} />
						</S.ButtonSend>
					</form>
				</S.Content>

			</S.Section>
		</>
	)
}

export default Index;