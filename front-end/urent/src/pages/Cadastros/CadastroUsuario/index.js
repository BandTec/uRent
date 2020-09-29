import React from 'react';

import FooterCadastro from '../../../components/FooterCadastro/index';
import HeaderCadastro from '../../../components/HeaderCadastro/index';

import * as S from '../style.js';

function CadastroUsuario() {
	return (

		<S.Cadastro>
			<HeaderCadastro title="Cadastro" />

			<S.CadastroContainer>

				<S.CadastroTitle>Seus Dados</S.CadastroTitle>

				<div style={{ width: '100%' }}>
					<S.CadastroLabel>Nome Completo</S.CadastroLabel>
					<S.CadastroInput />
				</div>

				<S.CadastroContentBox>

					<S.CadastroContent>
						<S.CadastroLabel>CPF</S.CadastroLabel>
						<S.CadastroInput style={{ width: '94%' }} />
					</S.CadastroContent>

					<S.CadastroContent>
						<S.CadastroLabel>Data Nascimento</S.CadastroLabel>
						<S.CadastroInput style={{ width: '94%' }} />
					</S.CadastroContent>

				</S.CadastroContentBox>

				<S.CadastroContentBox>

					<S.CadastroContent>
						<S.CadastroLabel>Contato</S.CadastroLabel>
						<S.CadastroInput style={{ width: '94%' }} />
					</S.CadastroContent>

					<S.CadastroContent>
						<S.CadastroLabel>CEP</S.CadastroLabel>
						<S.CadastroInput style={{ width: '94%' }} />
					</S.CadastroContent>

				</S.CadastroContentBox>

				<div style={{ width: '100%' }}>
					<S.CadastroLabel>E-mail</S.CadastroLabel>
					<S.CadastroInput />
				</div>

				<div style={{ width: '48%' }}>
					<S.CadastroLabel>Senha</S.CadastroLabel>
					<S.CadastroInput />
				</div>

				<FooterCadastro />
			</S.CadastroContainer>
		</S.Cadastro>


	)
}

export default CadastroUsuario;