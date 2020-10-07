import React from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai'

import FooterCadastro from '../../components/FooterCadastro/index';
import HeaderCadastro from '../../components/HeaderCadastro/index';


import * as S from '../Cadastros/style.js';

function FormularioAnuncio() {
	return (

		<S.Cadastro>
			<HeaderCadastro title="Anunciar" />

			<S.CadastroContainer>

				<S.CadastroTitle>Anúncio</S.CadastroTitle>

				<div style={{ width: '100%' }}>
					<S.CadastroLabel>Título do anúncio</S.CadastroLabel>
					<S.CadastroInput />
				</div>

				<S.CadastroContentBox>

					<S.CadastroContent>
						<div>
						<S.CadastroLabel style={{marginRight:'6px'}}>Seleciona a garagem</S.CadastroLabel>
						<AiOutlineInfoCircle color='#9C98A6' size='20'/>
						</div>
						<S.CadastroSelect title="Selecionar a garagem">

							<option value=""></option>
							<option value="hatch">República</option>
							<option value="sedan">Guarulhos</option>
							<option value="suv">Consolação</option>
						</S.CadastroSelect>

					</S.CadastroContent>

					<S.CadastroContent>
						<S.CadastroLabel style={{ color: "#0752DE",border: '1px solid',borderRadius:'15px'
							,textAlign:'center', marginTop:'5vh'}}>+ Adicionar nova garagem</S.CadastroLabel>
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
						<S.CadastroInput style={{ width: '94%' }} />
					</S.CadastroContent>

				</S.CadastroContentBox>


				<FooterCadastro />
			</S.CadastroContainer>
		</S.Cadastro>


	)
}

export default FormularioAnuncio;



