import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../service/api';
import carregarEstrelas from '../Functions';

import garagem01 from '../../assets/garagemExemplo.png';
import estrelaApagada from '../../assets/Star 5.png';
import estrelaLigada from '../../assets/Star 4.png';
import FooterAnuncio from '../../components/Footer/index';

import * as S from '../MeusAnuncios/style';

// function GerarAnuncio(anuncios) {

// 	const history = useHistory();

// 	function editar(id) {
// 		sessionStorage.setItem("anuncio-edit", id);
// 		history.push('/editar-anuncios');
// 	}

// 	function deletarAnuncio(id) {
// 		console.log("chamou")
// 		api.delete(`/anuncios/${id}`)
// 			.then(() => {
// 				alert(`Deletado com sucesso`);
// 				history.push('/meus-anuncios');
// 			})
// 			.catch(error => {
// 				alert('Erro ao deletar anúncio');
// 				console.log(error)
// 			})
// 	}

// 	var rows = [];

// 	anuncios.map(indexAnuncio =>

// 		rows.push(
// 			<S.CadastroContainer>

// 				<S.ContainerTitleAnuncio>
// 					{indexAnuncio.titulo}
// 				</S.ContainerTitleAnuncio>

// 				<S.ContainerContent>
// 					<S.ContentBox1>
// 						<img src={garagem01} alt="imagem da garagem do Anuncio" ></img>
// 					</S.ContentBox1>

// 					<S.ContentBox2>
// 						<S.Box2Avaliacao>
// 							<S.Box2NotaGaragem>{indexAnuncio.garagem.avaliacao}
// 								<S.Box2GaragemStars>
// 									<img src={estrelaLigada} alt="Estrela Ligada" ></img>
// 									<img src={estrelaLigada} alt="Estrela Ligada" ></img>
// 									<img src={estrelaLigada} alt="Estrela Ligada" ></img>
// 									<img src={estrelaLigada} alt="Estrela Ligada" ></img>
// 									<img src={estrelaApagada} alt="Estrela apagada" ></img>
// 								</S.Box2GaragemStars>
// 							</S.Box2NotaGaragem>
// 							<S.Box2NmrAvaliacoes>4 avaliações</S.Box2NmrAvaliacoes>
// 						</S.Box2Avaliacao>

// 						<S.BoxInfoContentBox2EditEnvio>
// 							<S.BoxInfoContentBox2>
// 								<S.BoxInfoContentBox2EditAnuncio onClick={() => editar(indexAnuncio.id)} > Editar anuncio</S.BoxInfoContentBox2EditAnuncio>
// 							</S.BoxInfoContentBox2>
// 						</S.BoxInfoContentBox2EditEnvio>
// 					</S.ContentBox2>

// 					<S.ContentBox2>
// 						<S.Preco>
// 							<S.PrecoDiarioText>
// 								Preço Diário:
//                             <S.PrecoDiarioValue>R${indexAnuncio.valorDiaria}</S.PrecoDiarioValue>
// 							</S.PrecoDiarioText>
// 						</S.Preco>

// 						<S.ExcluirAnuncio>
// 							<S.ExcluirAnuncioBox>
// 								<S.ExcluirAnuncioText onClick={() => deletarAnuncio(indexAnuncio.id)}> Excluir anuncio</S.ExcluirAnuncioText>
// 							</S.ExcluirAnuncioBox>
// 						</S.ExcluirAnuncio>
// 					</S.ContentBox2>

// 				</S.ContainerContent>
// 			</S.CadastroContainer>
// 		))

// 	return (rows);
// }

function MeusAnuncios() {

	const history = useHistory();
	const [anuncios, setAnuncios] = useState([]);

	useEffect(() => {
		const id = sessionStorage.getItem("id");

		if (id == null) {
			history.push('/login')
		}

		api.get(`/anuncios/usuario/${id}`)
			.then(response => {
				setAnuncios(response.data);
				const avaliacaoAnuncio = response.data.avaliacao;
				carregarEstrelas(avaliacaoAnuncio);
			})
			.catch(error => {
				console.log(error)
			})
	}, [])

	function editar(id) {
		sessionStorage.setItem("anuncio-edit", id);
		history.push('/editar-anuncios');
	}

	function deletarAnuncio(id) {
		console.log("chamou")
		api.delete(`/anuncios/${id}`)
			.then(() => {
				alert(`Deletado com sucesso`);
				history.push('/meus-anuncios');
			})
			.catch(error => {
				alert('Erro ao deletar anúncio');
				console.log(error)
			})
	}

	return (
		<div>
			<S.Background>
				{/* HEADER COM TITULO */}
				<S.Header>
					<S.HeaderNav>
						<Link to="/"><FiArrowLeft color="#fff" size="30" /></Link>
					</S.HeaderNav>
					<S.HeaderTitle>
						<h1 style={{ fontSize: '16px', color: '#fff', fontWeight: '400' }}>Meus anúncios</h1>
					</S.HeaderTitle>
				</S.Header>

				{/* HEADER SECUNDARIO-> DEFINIDO A PARTIR SE TEM ANUNCIOS OU NAO */}
				{anuncios.length > 0 ?

					<div>
						<S.Section>
							<S.SectionCotent>

								<S.BoxPaiInfo>
									<S.BoxInfo>
										<S.BoxTitle>
											Quantidade de anúncios
                     </S.BoxTitle>

										<S.BoxTitleValue>
											{anuncios.length}
										</S.BoxTitleValue>
									</S.BoxInfo>

									<S.ButtonHeader>
										<Link to="/cadastro-anuncio" style={{ textDecoration: 'none', color: '#68BEEF' }}>
											Criar novo anúncio
										</Link>
									</S.ButtonHeader>

									<S.BoxInfoText>
										Atualize e exclua aqui seus anúncios.
                 </S.BoxInfoText>
								</S.BoxPaiInfo>
							</S.SectionCotent>
						</S.Section>

						<S.Container>
							{
								anuncios.map(anuncio =>
									<S.CadastroContainer>

										<S.ContainerTitleAnuncio>
											{anuncio.titulo}
										</S.ContainerTitleAnuncio>

										<S.ContainerContent>
											<S.ContentBox1>
												<img src={garagem01} alt="imagem da garagem do Anuncio" height={'100%'} width={'100%'} />
											</S.ContentBox1>

											<S.ContentBox2>
												<div>
													<S.Box2NotaGaragem>{anuncio.garagem.avaliacao}
														<img src={estrelaLigada} alt="Estrela Ligada" ></img>
														<img src={estrelaLigada} alt="Estrela Ligada" ></img>
														<img src={estrelaLigada} alt="Estrela Ligada" ></img>
														<img src={estrelaLigada} alt="Estrela Ligada" ></img>
														<img src={estrelaApagada} alt="Estrela apagada" ></img>
													</S.Box2NotaGaragem>
													<S.Box2NmrAvaliacoes>4 avaliações</S.Box2NmrAvaliacoes>
												</div>

												<S.BoxInfoContentBox2EditEnvio>
													<S.BoxInfoContentBox2 onClick={() => editar(anuncio.id)}>
														Editar anuncio
												</S.BoxInfoContentBox2>
												</S.BoxInfoContentBox2EditEnvio>
											</S.ContentBox2>

											<S.ContentBox2>
											<S.Preco>
												<S.PrecoDiarioText>
													Preço Diário:
                            <S.PrecoDiarioValue>R${anuncio.valorDiaria}</S.PrecoDiarioValue>
												</S.PrecoDiarioText>
											</S.Preco>

											<S.ExcluirAnuncio>
												<S.ExcluirAnuncioBox onClick={() => deletarAnuncio(anuncio.id)}>
												Excluir anuncio
													{/* <S.ExcluirAnuncioText onClick={() => deletarAnuncio(anuncio.id)}> Excluir anuncio</S.ExcluirAnuncioText> */}
												</S.ExcluirAnuncioBox>
											</S.ExcluirAnuncio>
										</S.ContentBox2>

										</S.ContainerContent>
									</S.CadastroContainer>
								)
							}
						</S.Container>


						{/* <S.CadastroContainer style={{ background: '#E4EEFC' }}></S.CadastroContainer>

						<S.CadastroContainer style={{ background: '#E4EEFC' }}></S.CadastroContainer> */}


					</div>
					:
					<S.Background>
						<S.Section>
							<S.SectionCotent>
								<div>
									<S.SectionTextTitle>Nenhum anúncio ainda...</S.SectionTextTitle>
									<S.SectionTextSubtitle>Anuncie conosco e tenha uma renda extra.</S.SectionTextSubtitle>
									<S.AnunciarGarage>
										<S.AnunciarGarageText>
											Anunciar garagem
                    </S.AnunciarGarageText>
									</S.AnunciarGarage>
								</div>
							</S.SectionCotent>
						</S.Section>
						<S.BackGroundText>
							Nenhum anúncio encontrado em seu perfil.
                </S.BackGroundText>
					</S.Background>
				}


			</S.Background>
			<S.FooterEdit>
				<FooterAnuncio />
			</S.FooterEdit>

		</div>

	)
}

export default MeusAnuncios;