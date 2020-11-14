import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { FiAlertOctagon } from 'react-icons/fi';

import api from '../../../service/api';

import { Link, useHistory } from 'react-router-dom';

import HeaderCadastro from '../../../components/HeaderCadastro/index';
// import Input from '../../../components/Input/inputdata';

import * as S from '../style.js';

function CadastroUsuario() {

	const [nome, setNome] = useState("");
	const [cpf, setCpf] = useState("");
	const [dataNasc, setdataNasc] = useState("");
	const [cnh, setCnh] = useState("");
	const [cep, setCep] = useState("");
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	const history = useHistory();


	function cadastroUser() {

		api.post('usuarios', {

			"nome": nome,
			"cpf": cpf,
			"dataNasc": dataNasc,
			"cnh": cnh,
			"cep": cep,
			"email": email,
			"senha": senha,
			"avaliacao": 5.0

		})
			.then(response => {
				alert("Usuario Cadastrado!");

				history.push('/login');
			})
			.catch(error => {
				alert("Não cadastrou!");
				console.log(error);
			})
	}


	return (

		<S.Cadastro>
			<HeaderCadastro title="Cadastro" />

			<S.CadastroContainer>

				<S.CadastroTitle>Seus Dados</S.CadastroTitle>

				<div style={{ width: '100%' }}>
					<S.CadastroLabel>Nome Completo</S.CadastroLabel>
					<S.CadastroInput onChange={e => setNome(e.target.value)} />
				</div>

				<S.CadastroContentBox>

					<S.CadastroContent>
						<S.CadastroLabel>CPF</S.CadastroLabel>

						<InputMask mask='999.999.999-99' onChange={e => setCpf(e.target.value)} >
							{() =>
								<S.CadastroInput />
							}
						</InputMask>

					</S.CadastroContent>

					<S.CadastroContent>
						<S.CadastroLabel>Data Nascimento</S.CadastroLabel>
						<InputMask mask='9999-99-99' onChange={e => setdataNasc(e.target.value)} >
							{() =>
								<S.CadastroInput />
							}
						</InputMask>
					</S.CadastroContent>

				</S.CadastroContentBox>

				<S.CadastroContentBox>

					<S.CadastroContent>
						<S.CadastroLabel>CNH</S.CadastroLabel>
						<InputMask mask='999.999.999-99' onChange={e => setCnh(e.target.value)}>
							{() =>
								<S.CadastroInput />
							}
						</InputMask>
					</S.CadastroContent>

					<S.CadastroContent>
						<S.CadastroLabel>CEP</S.CadastroLabel>
						<InputMask mask='99999-999' onChange={e => setCep(e.target.value)}>
							{() =>
								<S.CadastroInput />
							}
						</InputMask>
					</S.CadastroContent>

				</S.CadastroContentBox>

				<div style={{ width: '100%' }}>
					<S.CadastroLabel>E-mail</S.CadastroLabel>
					<S.CadastroInput onChange={e => setEmail(e.target.value)} />
				</div>

				<div style={{ width: '48%' }}>
					<S.CadastroLabel>Senha</S.CadastroLabel>
					<S.CadastroInput onChange={e => setSenha(e.target.value)} />
				</div>

				<S.Footer>
					<S.FooterAlert>
						<FiAlertOctagon color="#8257E5" size="35" style={{ alignSelf: 'flex-start' }} />
						<S.FooterText>Importante! Preencha todos os dados</S.FooterText>
					</S.FooterAlert>
					<S.FooterButton onClick={cadastroUser}>Salvar Cadastro</S.FooterButton>
				</S.Footer>

			</S.CadastroContainer>
		</S.Cadastro>


	)
}

export default CadastroUsuario;