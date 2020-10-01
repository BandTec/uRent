import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import icon from '../../assets/iconcadastro.png';

import * as S from './style';

function HeaderCadastro({ title }) {
	return (
		<div>
			<S.Header>
				<S.HeaderNav>
					<Link to="/"><FiArrowLeft color="#fff" size="30" /></Link>
				</S.HeaderNav>
				<S.HeaderTitle>
					<h1 style={{ fontSize: '16px', color: '#fff', fontWeight: '400' }}>{title}</h1>
				</S.HeaderTitle>
			</S.Header>

			<S.Section>

				<S.SectionText>
					{title === 'Cadastro' ?
						<div>
							<S.SectionTextTitle>Vamos nos conhecer um pouquinho?</S.SectionTextTitle>
							<S.SectionTextSubtitle>O primeiro passo, é preencher esse formulário de inscrição.</S.SectionTextSubtitle>
						</div>
						: title === 'Anunciar' ?
							<div>
								<S.SectionTextTitle>Que bom que quer anunciar conosco!</S.SectionTextTitle>
								<S.SectionTextSubtitle>Antes precisamos saber um pouco sua garagem.</S.SectionTextSubtitle>
							</div>

							: title === 'Cadastro Veiculo' ?
								<div>
									<S.SectionTextTitle>Cadastre o seu veiculo :)</S.SectionTextTitle>
									<S.SectionTextSubtitle>Coloque algumas informações sobre o seu veiculo</S.SectionTextSubtitle>
								</div>
								: title === 'Cadastro Garagem' ?
									<div>
										<S.SectionTextTitle>Cadastre sua garagem aqui :)</S.SectionTextTitle>
										<S.SectionTextSubtitle>Informe os dados da sua garagem para anunciar conosco!</S.SectionTextSubtitle>
									</div>
									:
									<div>
										<S.SectionTextTitle>Que bom que quer alugar uma garagem!</S.SectionTextTitle>
										<S.SectionTextSubtitle>Precisamos de apenas algumas informações sobre o veículo que você irá guardar.</S.SectionTextSubtitle>
									</div>
					}
				</S.SectionText>

				<S.SectionIcon>
					<img src={icon} alt="Icone" height="90px" />
				</S.SectionIcon>


			</S.Section>
		</div>
	)
}


export default HeaderCadastro;