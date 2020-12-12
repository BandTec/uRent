import React, { useState } from 'react';
import { FaRegUser, FaKey } from 'react-icons/fa';

import { useHistory } from 'react-router-dom';

import api from '../../service/api';

import logo from '../../assets/logo-reset.svg';
import * as S from '../Login/style';

function ResetSenha() {

	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [senhasCorretas, setSenhaCorretas] = useState(true);

	const history = useHistory();

	function alterarSenha() {

		if (email === "" || senha === "") {
			alert('Informe seu e-mail e a nova senha')
		} else {

			api.put(`/usuarios/alterar-senha`, {
				"email": email,
				"senha": senha
			})
				.then(() => {
					alert("Senha alterada com sucesso!")
					history.push('/login');
				})
				.catch(error => {
					console.log(error)
					alert('Erro');
				})
		}
	}

	function comparaSenha(confirmaSenha) {
		if (confirmaSenha != senha) {
			setSenhaCorretas(false)
		} else {
			setSenhaCorretas(true)
		}
	}

	return (
		<div>
			<S.Welcome>

				<S.FormLogin>

					<S.LogoImage><img src={logo} alt="Logo uRent" height="100%" /></S.LogoImage>
					<S.Form>
						<S.FormTitleEntrar>Esqueceu a senha?</S.FormTitleEntrar>
						<S.FormTitleLabel2>Insira o endereço de email associado à sua conta, e digite uma nova senha.</S.FormTitleLabel2>
						<S.FormData>
							<FaRegUser style={{ position: 'absolute', left: '3%' }} size='25' color='#FFFFFF' />
							<S.FormInput placeholder="Email" placeholderTextColor='red' onChange={e => setEmail(e.target.value)} />
						</S.FormData>
						<S.FormData>
							<FaKey style={{ position: 'absolute', left: '3%' }} size='25' color='#FFFFFF' />
							<S.FormInput type="password" placeholder="Nova senha" placeholderTextColor='red' onChange={e => setSenha(e.target.value)} />
						</S.FormData>
						<S.FormData>
							<FaKey style={{ position: 'absolute', left: '3%' }} size='25' color='#FFFFFF' />
							<S.FormInput type="password" placeholder="Confirme nova senha" placeholderTextColor='red' onBlur={e => comparaSenha(e.target.value)} />
						</S.FormData>

						{
							senhasCorretas ?
								<S.ButtonEntrar onClick={alterarSenha}>Atualizar senha</S.ButtonEntrar>
								:
								<div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
									<S.ButtonEntrar disabled>Atualizar senha</S.ButtonEntrar>
									<span style={{ color: 'red', fontSize: '23px' }}>Senhas Inválidas</span>
								</div>
						}

					</S.Form>

				</S.FormLogin>

			</S.Welcome>
		</div>
	)
}


export default ResetSenha;