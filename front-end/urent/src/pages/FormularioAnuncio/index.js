import React from 'react';

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
						<S.CadastroLabel>Seleciona a garagem</S.CadastroLabel>
						<S.CadastroInput style={{ width: '94%' }} />
					</S.CadastroContent>

					<S.CadastroContent>
						<S.CadastroLabel style={{ color: "#0752DE" }}>+ Adicionar nova garagem</S.CadastroLabel>
						<S.CadastroInputAddGaragem style={{ width: '94%' }} />
					</S.CadastroContent>

				</S.CadastroContentBox>

				<S.CadastroContentBox>

					<S.CadastroContent>
						<S.CadastroLabel>Tipo de veículo</S.CadastroLabel>
						<S.CadastroInput style={{ width: '94%' }} />
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



