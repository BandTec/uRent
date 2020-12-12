import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import CepCoords from 'coordenadas-do-cep';
import { useHistory } from 'react-router-dom';
import { FiAlertOctagon } from 'react-icons/fi';

import api from '../../../service/api';

import HeaderCadastro from '../../../components/HeaderCadastro/index';

import * as S from '../style.js';

function CadastroGaragem() {

	const [usuario, setUsuario] = useState({});

	const [cep, setCep] = useState("");
	const [numero, setNumero] = useState("");
	const [file, setFile] = useState("");

	const history = useHistory();

	useEffect(() => {

		api.get(`usuarios/status`)
			.catch(() => {
				history.push('/login')
			})

		const id = sessionStorage.getItem("id");

		api.get(`/usuarios/${id}`)
			.then(response => {
				setUsuario(response.data);
			})
			.catch(error => {
				console.log(error)
			})

	}, [])

	// const data = new FormData();
	// const config = {
	//   headers: {
	//     'content-type': 'multipart/form-data'
	//   }
	// }
	// console.log(cardFile);
	// data.append('csv', cardFile);
	// api.post('',data)

	function cadastro() {

		const data = new FormData();
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		}

		data.append('file', file);

		CepCoords.getByCep(cep)
			.then(response => {
				api.post('garagens', {
					"cep": cep,
					"numero": numero,
					"latitude": response.lat,
					"longitude": response.lon,
					"avaliacao": '',
					"usuario": usuario
				})
					.then(response => {
						alert('Cadastro realizado com sucesso');
						data.append('idGaragem', response.data);
						api.post('/imagens/upload', data, config)
							.then(() => {
								alert('Imagem cadastrada com sucesso');
								history.push('/feed');
							})
							.catch(error => {
								alert('Erro ao cadastrar imagem');
								console.log(error);
							})
					})
					.catch(error => {
						alert('Erro ao realizar cadastro, tente novamente');
						console.log(error);
					})

			})
			.catch(error => console.log(error))
	}

	return (

		<S.Cadastro>

			<HeaderCadastro title="Cadastro Garagem" />


			<S.CadastroContainer>

				<S.CadastroTitle>Garagem</S.CadastroTitle>



				<S.CadastroContentBox>

					<S.CadastroContent>
						<S.CadastroLabel>Cep</S.CadastroLabel>
						<InputMask mask='99999-999' onChange={e => setCep(e.target.value)}>
							{() =>
								<S.CadastroInput />
							}
						</InputMask>
					</S.CadastroContent>

					<S.CadastroContent>

						<S.CadastroLabel>Numero</S.CadastroLabel>
						<S.CadastroInput style={{ width: '93%' }} onChange={e => setNumero(e.target.value)} />

					</S.CadastroContent>

				</S.CadastroContentBox>

				<div style={{ width: '100%' }}>
					<S.CadastroLabel>Fotos</S.CadastroLabel>
					<S.CadastroInput type="file" onChange={e => setFile(e.target.files[0])} />

				</div>

				<S.Footer>
					<S.FooterAlert>
						<FiAlertOctagon color="#8257E5" size="35" style={{ alignSelf: 'flex-start' }} />
						<S.FooterText>Importante! Preencha todos os dados</S.FooterText>
					</S.FooterAlert>
					<S.FooterButton onClick={cadastro}>Salvar Cadastro</S.FooterButton>
				</S.Footer>


			</S.CadastroContainer>


		</S.Cadastro>

	)
}

export default CadastroGaragem;