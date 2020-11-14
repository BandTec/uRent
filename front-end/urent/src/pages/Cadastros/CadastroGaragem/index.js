import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useHistory } from 'react-router-dom';
import { FiAlertOctagon } from 'react-icons/fi';

import api from '../../../service/api';

import HeaderCadastro from '../../../components/HeaderCadastro/index';

import * as S from '../style.js';

function CadastroGaragem() {

	const [usuario, setUsuario] = useState({});

	const [cep, setCep] = useState("");
	const [numero, setNumero] = useState("");

	const history = useHistory();

	useEffect(() => {

		api.get(`usuario/status`)
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
				alert('Deu Ruim');
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
					<S.CadastroInput type="file" />

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