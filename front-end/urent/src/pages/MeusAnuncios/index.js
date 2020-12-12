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

function MeusAnuncios() {

	const history = useHistory();
	const [anuncios, setAnuncios] = useState([]);
	const [imagens, setImagens] = useState([]);

	const id = sessionStorage.getItem("id");

	function carregar() {
		api.get(`/anuncios/usuario/${id}`)
			.then(response => {
				setAnuncios(response.data);
				// const avaliacaoAnuncio = response.data.avaliacao;
				// carregarEstrelas(avaliacaoAnuncio);
			})
			.catch(error => {
				console.log(error)
			})
	}

	useEffect(() => {

		api.get(`usuarios/status`)
			.catch(() => {
				history.push('/login')
			})

		carregar(id);

		api.get('/imagens/files/')
			.then(response => {
				setImagens(response.data);
			})
			.catch(error => {
				alert('Erro ao buscar imagens, recarregue a página');
				console.log(error);
			})
	}, [])

	function editar(id) {
		sessionStorage.setItem("anuncio-edit", id);
		history.push('/editar-anuncios');
	}

	function deletarAnuncio(id) {
		api.delete(`/anuncios/${id}`)
			.then(() => {
				alert(`Deletado com sucesso`);
				carregar();
			})
			.catch(error => {
				alert('Erro ao deletar anúncio, tente novamente');
				console.log(error)
			})
	}

	function acharImagem(idGaragem) {
		for (let i = 0; i < imagens.length; i++) {
			if (idGaragem === imagens[i].idGaragem) {
				return imagens[i].fileUri;
			}
		}
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
									<S.CadastroContainer key={anuncio.id}>

										<S.ContainerTitleAnuncio>
											{anuncio.titulo}
										</S.ContainerTitleAnuncio>

										<S.ContainerContent>
											<S.ContentBox1>
												<img src={acharImagem(anuncio.garagem.id)} alt="imagem da garagem do Anuncio" height={'100%'} width={'100%'} />
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
										<Link to="/cadastro-anuncio">
											<S.AnunciarGarageText>
												Anunciar garagem
                    </S.AnunciarGarageText>
										</Link>
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