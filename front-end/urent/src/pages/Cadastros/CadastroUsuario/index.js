import React from 'react';
import InputMask from 'react-input-mask';


import FooterCadastro from '../../../components/FooterCadastro/index';
import HeaderCadastro from '../../../components/HeaderCadastro/index';
// import Input from '../../../components/Input/inputdata';

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

						<InputMask mask='999.999.999.99'>
							{() =>
								<S.CadastroInput />
							}
						</InputMask>

					</S.CadastroContent>

					<S.CadastroContent>
						<S.CadastroLabel>Data Nascimento</S.CadastroLabel>
						<InputMask mask='99/99/9999'>
							{() =>
								<S.CadastroInput />
							}
						</InputMask>
					</S.CadastroContent>

				</S.CadastroContentBox>

				<S.CadastroContentBox>

					<S.CadastroContent>
						<S.CadastroLabel>Contato</S.CadastroLabel>
						<S.CadastroInput style={{ width: '94%' }} />
					</S.CadastroContent>

					<S.CadastroContent>
						<S.CadastroLabel>CEP</S.CadastroLabel>
						<InputMask mask='99999-999'>
							{() =>
								<S.CadastroInput />
							}
						</InputMask>
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