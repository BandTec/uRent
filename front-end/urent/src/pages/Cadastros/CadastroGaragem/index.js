import React, { useEffect, useState } from 'react';

import api from '../../../service/api';

import FooterCadastro from '../../../components/FooterCadastro/index';
import HeaderCadastro from '../../../components/HeaderCadastro/index';

import * as S from '../style.js';

function CadastroGaragem() {

	const [usuario, setUsuario] = useState({});

	const [cep, setCep] = useState("");
	const [numero, setNumero] = useState("");

	useEffect(() => {

		const id = sessionStorage.getItem("id");

		api.get(`/usuarios/${id}`)
			.then(response => {
				setUsuario(response.data);
			})
			.catch(error => {
				console.log(error)
			})

	}, [])

	function cadastro() {

		api.post('garagens', {
			"cep": cep,
			"numero": numero,
			"latitude": "123456789",
			"longitude": "987456321",
			"avaliacao": 2,
			"usuario": usuario
		})
		.then(response => {
			alert('Deu bom');
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		})
	}

	return (

		<S.Cadastro>

			<HeaderCadastro title="Cadastro Garagem" />


			<S.CadastroContainer>

				<S.CadastroTitle>Garagem</S.CadastroTitle>



				<S.CadastroContentBox>

					<S.CadastroContent>
						<S.CadastroLabel>Cep</S.CadastroLabel>
						<S.CadastroInput style={{ width: '94%' }} onChange={e => setCep(e.target.value)} />
					</S.CadastroContent>

					<S.CadastroContent>

						<S.CadastroLabel>Numero</S.CadastroLabel>
						<S.CadastroInput style={{ width: '93%' }} onChange={e => setNumero(e.target.value)} />

					</S.CadastroContent>

				</S.CadastroContentBox>

				<div style={{ width: '100%' }}>
					<S.CadastroLabel>Fotos</S.CadastroLabel>
					<S.CadastroInput type="file" />

				</div>

				<button onClick={cadastro}>Cadastrar</button>


				<FooterCadastro />

			</S.CadastroContainer>


		</S.Cadastro>

	)
}

export default CadastroGaragem;