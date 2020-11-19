import React, { useState, useEffect } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FiAlertOctagon } from 'react-icons/fi';

import { Link, useHistory } from 'react-router-dom';

import api from '../../service/api';

import HeaderCadastro from '../../components/HeaderCadastro/index';


import * as S from '../Cadastros/style.js';

function CadastroAnuncio() {

	const [titulo, setTitulo] = useState("");
	const [valorDiaria, setValorDiaria] = useState("");
	const [tipoVeiculo, setTipoVeiculo] = useState("");
	const [garagem, setGaragem] = useState("");
	const [garagensUsuarios, setGaragensUsuarios] = useState([]);
	const [tipoVeiculoUsuarios, setTipoVeiculoUsuarios] = useState([]);

	const history = useHistory();

	useEffect(() => {

		const id = sessionStorage.getItem("id");

		if (id == null) {

			history.push('/login')
		}

		api.get(`/garagens/usuario/${id}`)
			.then(response => {
				setGaragensUsuarios(response.data)
			})
			.catch(error => {
				console.log(error)
			})


		api.get(`/tipo-veiculos`)
			.then(response => {
				setTipoVeiculoUsuarios(response.data)
			})
			.catch(error => {
				console.log(error)
			})


	}, [])

	function cadastrarAnuncio() {

		api.post('anuncios', {

			"titulo": titulo,
			"valorDiaria": valorDiaria,
			"tipoVeiculo": tipoVeiculoUsuarios[tipoVeiculo - 1].id,
			"garagem": garagensUsuarios[garagem - 1]

		})
			.then(response => {
				alert("Anuncio Cadastrado!");
				console.log(titulo, valorDiaria)
				history.push('/meus-anuncios');
			})
			.catch(error => {
				alert("Não cadastrou!");
				console.log(error);
			})
	}



	return (

		<S.Cadastro>
			<HeaderCadastro title="Anunciar" />

			<S.CadastroContainer>

				<S.CadastroTitle>Anúncio</S.CadastroTitle>

				<div style={{ width: '100%' }}>
					<S.CadastroLabel>Título do anúncio</S.CadastroLabel>
					<S.CadastroInput onChange={e => setTitulo(e.target.value)} />
				</div>

				<S.CadastroContentBox>

					<S.CadastroContent>
						<div>
							<S.CadastroLabel style={{ marginRight: '6px' }}>Seleciona a garagem</S.CadastroLabel>
							<AiOutlineInfoCircle color='#9C98A6' size='20' />
						</div>
						<S.CadastroSelect title="Selecionar a garagem" onChange={e => setGaragem(e.target.value)} >

							<option value=""></option>
							{
								garagensUsuarios.map(garagem =>
									<option value={garagem.id}>{garagem.cep}</option>
								)
							}
						</S.CadastroSelect>

					</S.CadastroContent>

					<S.CadastroContent>
						<S.CadastroLabel2 style={{
							color: "#0752DE", border: '1px solid', borderRadius: '15px'
							, textAlign: 'center', marginTop: '5vh'
						}}>+ Adicionar nova garagem </S.CadastroLabel2>
						{/* <S.CadastroInputAddGaragem style={{ width: '94%' }} /> */}
					</S.CadastroContent>

				</S.CadastroContentBox>

				<S.CadastroContentBox>

					<S.CadastroContent>
						<div>
							<S.CadastroLabel style={{ marginRight: '6px' }}>Tipo de veículo</S.CadastroLabel>
							<AiOutlineInfoCircle color='#9C98A6' size='20' />
						</div>
						<S.CadastroSelect title="Tipo de veiculo" onChange={e => setTipoVeiculo(e.target.value)}>

							<option value=""></option>
							{
								tipoVeiculoUsuarios.map(tipoVeiculo =>
									<option value={tipoVeiculo.id}>{tipoVeiculo.tipo}</option>
								)
							}
						</S.CadastroSelect>

					</S.CadastroContent>

					<S.CadastroContent>
						<S.CadastroLabel>Valor (diária)</S.CadastroLabel>
						<S.CadastroInput style={{ width: '94%' }} onChange={e => setValorDiaria(e.target.value)} />
					</S.CadastroContent>

				</S.CadastroContentBox>


				<S.Footer>
					<S.FooterAlert>
						<FiAlertOctagon color="#8257E5" size="35" style={{ alignSelf: 'flex-start' }} />
						<S.FooterText>Importante! Preencha todos os dados</S.FooterText>
					</S.FooterAlert>
					<S.FooterButton onClick={cadastrarAnuncio}>Salvar Cadastro</S.FooterButton>
				</S.Footer>

			</S.CadastroContainer>
		</S.Cadastro>


	)
}

export default CadastroAnuncio;



