import React, { useEffect, useState } from 'react';

import api from '../../service/api';
import carregarEstrelas from '../Functions';

import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/HeaderCadastro/index';
import fotoPerfil from '../../assets/user.png';


import * as S from '../Perfil/style';

function FormularioPerfil() {

	const [usuario, setUsuario] = useState({});

	const history = useHistory();

	useEffect(() => {

		api.get(`usuarios/status`)
			.catch(() => {
				history.push('/login')
			})

		const id = sessionStorage.getItem("id");

		if (id == null) {

			history.push('/login')
		}

		api.get(`/usuarios/${id}`)
			.then(response => {
				setUsuario(response.data);
				const avaliacaoAnuncio = response.data.avaliacao;
				carregarEstrelas(avaliacaoAnuncio);
			})
			.catch(error => {
				alert('Erro ao buscar dados do usuário, recarregue a página')
				console.log(error)
			})
	}, [])


	return (

		<div>

			<Header title="Perfil" />

			<div>
				<S.Welcome>

					<S.FormPerfil>

						<S.ContainerPerfil>

							<S.BoxPerfil>

								<div>
									<S.FormTitle>Nome</S.FormTitle>


									<S.FormInfo>{usuario.nome}</S.FormInfo>



								</div>

								<div>
									<S.FormTitle>CPF</S.FormTitle>



									<S.FormInfo>{usuario.cpf}</S.FormInfo>



								</div>

								<div>
									<S.FormTitle>Data de Nascimento</S.FormTitle>

									<S.FormInfo>{usuario.dataNasc}</S.FormInfo>


								</div>

								<div>
									<S.FormTitle>CNH</S.FormTitle>

									<S.FormInfo>{usuario.cnh}</S.FormInfo>


								</div>

							</S.BoxPerfil>

							<S.BoxContentDados>

								<S.BoxImgPerfil>

									<S.Image src={fotoPerfil} />

								</S.BoxImgPerfil>


								<S.BoxPerfilStars>
									<S.StarsAvaliacao>
										<S.ContentStars><S.Stars id="i1"></S.Stars></S.ContentStars>
										<S.ContentStars><S.Stars id="i2"></S.Stars></S.ContentStars>
										<S.ContentStars><S.Stars id="i3"></S.Stars></S.ContentStars>
										<S.ContentStars><S.Stars id="i4"></S.Stars></S.ContentStars>
										<S.ContentStars><S.Stars id="i5"></S.Stars></S.ContentStars>
									</S.StarsAvaliacao>
								</S.BoxPerfilStars>

								<div style={{ width: '150px', height: '60px', margin: '20px auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
									<Link to="/cadastro-garagem">
										<S.ButtonCadastro>Cadastrar Garagem</S.ButtonCadastro>
									</Link>

									<Link to="/cadastro-veiculo">
										<S.ButtonCadastro>Cadastrar Veículo</S.ButtonCadastro>
									</Link>
								</div>

							</S.BoxContentDados>

						</S.ContainerPerfil>

						<div>
							<S.FormTitle>CEP</S.FormTitle>

							<S.FormInfo>{usuario.cep}</S.FormInfo>

						</div>

						<div>
							<S.FormTitle>E-mail</S.FormTitle>

							<S.FormInfo>{usuario.email}</S.FormInfo>

						</div>



						<div style={{ display: 'flex', marginTop: '-10px' }}>

							<div>
								<S.FormTitle>Senha</S.FormTitle>

								<S.FormInfo>**********</S.FormInfo>

							</div>


							<Link to="/reset-senha">
								<S.Button>Alterar Senha</S.Button>
							</Link>
						</div>


					</S.FormPerfil>


				</S.Welcome>

			</div>


		</div >



	)
}

export default FormularioPerfil;



