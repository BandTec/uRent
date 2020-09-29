import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

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
							:
							<div>
								<S.SectionTextTitle>Que bom que quer alugar uma garagem!</S.SectionTextTitle>
								<S.SectionTextSubtitle>Precisamos de apenas algumas informações sobre o veículo que você irá guardar.</S.SectionTextSubtitle>
							</div>
					}
				</S.SectionText>
			</S.Section>
		</div>
	)
}


export default HeaderCadastro;