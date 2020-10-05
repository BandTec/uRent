import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import garagem01 from '../../assets/garage01.png';

import FooterAnuncio from '../../components/Footer/index';

import * as S from '../MeusAnuncios/style';

var anuncio = 1;
function MeusAnuncios() {
    return (
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

                    </S.SectionCotent>
                </S.Section>

                <S.CadastroContainer>
                    <S.ContainerTitleAnuncio>
                    Garagem fechada aluguel diário
                    </S.ContainerTitleAnuncio>

                    <S.ContainerContent>
                        <S.ContentBox1>
                        <img src = {garagem01} alt="imagem da garagem do Anuncio" ></img>
                        </S.ContentBox1>
                        <S.ContentBox2>
                       <h3>8.0</h3>
                       4 avaliações

                       <S.BoxInfoContentBox2>
                       Editar anúncio
                       </S.BoxInfoContentBox2>
                        </S.ContentBox2>
                        <S.ContentBox2>
                            
                        </S.ContentBox2>
                    </S.ContainerContent>
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

    )
}

export default MeusAnuncios;