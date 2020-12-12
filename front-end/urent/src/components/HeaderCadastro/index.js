import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import icon from '../../assets/iconcadastro.png';

import * as S from './style';

var anuncio = 1;

function HeaderCadastro({ title }) {
	return (
		
		<div>
			<S.Header>
				<S.HeaderNav>
					<Link to="/feed"><FiArrowLeft color="#fff" size="30" /></Link>
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
									: title === 'Alugar Garagem' ?
										<div>
											<S.SectionTextTitle>Que bom que quer alugar uma garagem!</S.SectionTextTitle>
											<S.SectionTextSubtitle>Precisamos de apenas algumas informações sobre o veículo que você irá guardar.</S.SectionTextSubtitle>
										</div>
										: title === 'Meus Anúncios' && anuncio < 1 ?
											<div>
												<S.SectionTextTitle>Nenhum anúncio ainda...</S.SectionTextTitle>
												<S.SectionTextSubtitle>Anuncie conosco e tenha uma renda extra.</S.SectionTextSubtitle>
											</div>
											: title === 'Meus Anúncios' && anuncio > 0 ?
												<div>
													<S.ContentInfoAnuncio>

													</S.ContentInfoAnuncio>

													<S.ContentInfoAnuncio>

													</S.ContentInfoAnuncio>

													<S.ContentInfoAnuncio>

													</S.ContentInfoAnuncio>
													<S.SectionTextSubtitle>Atualize e exclua aqui seus anúncios. </S.SectionTextSubtitle>
												</div>
												: title === 'Perfil' ?
													<div>
														<S.SectionTextTitle>Meu Perfil</S.SectionTextTitle>
														<S.SectionTextSubtitle>Suas informações, você pode alterá-las quando quiser</S.SectionTextSubtitle>
													</div>
													: title === 'Editar Anuncio' ?
													<div>
														<S.SectionTextTitle>Edite seu Anuncio</S.SectionTextTitle>
														<S.SectionTextSubtitle>Aqui você pode atualizar informações sobre seus anuncios</S.SectionTextSubtitle>
													</div>
													:
														<div>
															<S.SectionTextTitle>Pagina não encontrada</S.SectionTextTitle>
															<S.SectionTextSubtitle>Verifique o parametro </S.SectionTextSubtitle>
														</div>

					}
				</S.SectionText>

				<S.SectionIcon src={icon}>

				</S.SectionIcon>


			</S.Section>
		</div>
	)
}


export default HeaderCadastro;