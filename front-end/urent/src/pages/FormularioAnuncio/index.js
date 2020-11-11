import React, { useState,useEffect } from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai'

import { Link, useHistory } from 'react-router-dom';

import api from '../../service/api';

import FooterCadastro from '../../components/FooterCadastro/index';
import HeaderCadastro from '../../components/HeaderCadastro/index';


import * as S from '../Cadastros/style.js';

function FormularioAnuncio() {

	const [titulo, setTitulo] = useState("");
	const [valorDiaria, setValorDiaria] = useState("");
	const [tipoVeiculo, setTipoVeiculo] = useState("");
	const [garagem, setGaragem] = useState("");
	const [garagensUsuarios, setGaragensUsuarios] = useState("");

	const history = useHistory();

	useEffect(() => {

        const id = sessionStorage.getItem("id");

        if (id == null) {

            history.push('/login')
        }

		api.get(`/garagens/usuario/${id}`)
		.then(response=>{
			setGaragensUsuarios(response.data)
		})
		.catch(error=>{
			console.log(error)
		})

    }, [])

	function cadastrarAnuncio() {

		api.post('anuncios', {

			"titulo": titulo,
			"valorDiaria": valorDiaria,
			"tipoVeiculo": tipoVeiculo,
			"garagem": garagem

		})
			.then(response => {
				alert("Anuncio Cadastrado!");

				history.push('/login');
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
						<S.CadastroLabel style={{marginRight:'6px'}}>Seleciona a garagem</S.CadastroLabel>
						<AiOutlineInfoCircle color='#9C98A6' size='20'/>
						</div>
						<S.CadastroSelect title="Selecionar a garagem" onChange={e => setGaragem(e.target.value)} >

							<option value=""></option>
							{
								garagensUsuarios.map
							}
						</S.CadastroSelect>

					</S.CadastroContent>

					<S.CadastroContent>
						<S.CadastroLabel2 onClick={cadastrarAnuncio} style={{ color: "#0752DE",border: '1px solid',borderRadius:'15px'
							,textAlign:'center', marginTop:'5vh'}}>+ Adicionar nova garagem </S.CadastroLabel2>
						{/* <S.CadastroInputAddGaragem style={{ width: '94%' }} /> */}
					</S.CadastroContent>

				</S.CadastroContentBox>

				<S.CadastroContentBox>

					<S.CadastroContent>
						<div>
						<S.CadastroLabel style={{marginRight:'6px'}}>Tipo de veículo</S.CadastroLabel>
						<AiOutlineInfoCircle color='#9C98A6' size='20'/>
						</div>
					<S.CadastroSelect title="Tipo de veiculo">

							<option value=""></option>
							<option value="hatch">Carro Hatch</option>
							<option value="sedan">Carro Sedan</option>
							<option value="suv">Carro SUV</option>
							<option value="moto">Moto</option>
							<option value="caminhao">Caminhão</option>
						</S.CadastroSelect>

					</S.CadastroContent>

					<S.CadastroContent>
						<S.CadastroLabel>Valor (diária)</S.CadastroLabel>
						<S.CadastroInput style={{ width: '94%' }} onChange={e => valorDiaria(e.target.value)} />
					</S.CadastroContent>

				</S.CadastroContentBox>


				<FooterCadastro />
			</S.CadastroContainer>
		</S.Cadastro>


	)
}

export default FormularioAnuncio;



