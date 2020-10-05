import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import garagem01 from '../../assets/garage01.png';
import estrelaApagada from '../../assets/Star 5.png';
import estrelaLigada from '../../assets/Star 4.png';

import FooterAnuncio from '../../components/Footer/index';

import * as S from '../MeusAnuncios/style';

var anuncio = 1;
function MeusAnuncios() {
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
            {anuncio > 0 ?
                <div>
                    <S.Section>
                        <S.SectionCotent>

                            <S.BoxPaiInfo>
                                <S.BoxInfo>
                                    <S.BoxTitle>
                                        Quantidade de anúncios
                            </S.BoxTitle>

                                    <S.BoxTitleValue>
                                        89
                            </S.BoxTitleValue>
                                </S.BoxInfo>

                                <S.BoxInfo>
                                    <S.BoxTitle>
                                        Visualizações totais
                            </S.BoxTitle>
                                    <S.BoxTitleValue>
                                        200
                            </S.BoxTitleValue>
                                </S.BoxInfo>


                                <S.BoxInfoText>
                                    Atualize e exclua aqui seus anúncios.
						</S.BoxInfoText>
                            </S.BoxPaiInfo>
                        </S.SectionCotent>
                    </S.Section>

                    <S.CadastroContainer>
                        <S.ContainerTitleAnuncio>
                            Garagem fechada aluguel diário
                    </S.ContainerTitleAnuncio>

                        <S.ContainerContent>
                            <S.ContentBox1>
                                <img src={garagem01} alt="imagem da garagem do Anuncio" ></img>
                            </S.ContentBox1>
                            <S.ContentBox2>
                                <S.Box2Avaliacao>
                                    <S.Box2NotaGaragem>
                                        8.0

                                        <S.Box2GaragemStars>
                                            <img src={estrelaLigada} alt="Estrela Ligada" ></img>
                                            <img src={estrelaLigada} alt="Estrela Ligada" ></img>
                                            <img src={estrelaLigada} alt="Estrela Ligada" ></img>
                                            <img src={estrelaLigada} alt="Estrela Ligada" ></img>
                                            <img src={estrelaApagada} alt="Estrela apagada" ></img>
                                        </S.Box2GaragemStars>

                                    </S.Box2NotaGaragem>

                                    <S.Box2NmrAvaliacoes>
                                        4 avaliações
                                </S.Box2NmrAvaliacoes>

                                </S.Box2Avaliacao>
                                <S.BoxInfoContentBox2EditEnvio>
                                    <S.BoxInfoContentBox2>
                                        <S.BoxInfoContentBox2EditAnuncio>
                                            Editar anuncio
                                    </S.BoxInfoContentBox2EditAnuncio>
                                    </S.BoxInfoContentBox2>
                                </S.BoxInfoContentBox2EditEnvio>
                            </S.ContentBox2>
                            <S.ContentBox2>
                                <S.Preco>
                                    <S.PrecoDiarioText>
                                        Preço Diário:
                                    <S.PrecoDiarioValue>
                                            R$ 15,00
                                    </S.PrecoDiarioValue>
                                    </S.PrecoDiarioText>
                                </S.Preco>
                                <S.ExcluirAnuncio>
                                    <S.ExcluirAnuncioBox>
                                        <S.ExcluirAnuncioText>
                                            Excluir anuncio
                                </S.ExcluirAnuncioText>
                                    </S.ExcluirAnuncioBox>
                                </S.ExcluirAnuncio>
                            </S.ContentBox2>
                        </S.ContainerContent>
                    </S.CadastroContainer>
<S.CadastroContainer style = {{background: '#E4EEFC'}}>

</S.CadastroContainer>

<S.CadastroContainer style = {{background: '#E4EEFC'}}>
    
</S.CadastroContainer>
                    

                </div>
                :
                <S.Section>
                    {/* <S.SectionCotent>
                        <div>
                            <S.SectionTextTitle>Nenhum anúncio ainda...</S.SectionTextTitle>
                            <S.SectionTextSubtitle>Anuncie conosco e tenha uma renda extra.</S.SectionTextSubtitle>
                        </div>
                    </S.SectionCotent> */}
                </S.Section>
            }


        </S.Background>
        <S.FooterEdit>
            <FooterAnuncio/>
        </S.FooterEdit>
        </div>
    )
}

export default MeusAnuncios;