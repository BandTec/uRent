import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import HeaderAnuncio from '../../components/HeaderAnuncio/index';
import Footer from '../../components/Footer';
import foto from '../../assets/garagemExemplo.png';

import * as S from './style';

function FinalizarAluguel() {

    return (
        <div>
            <HeaderAnuncio />
            <S.Header>
                <S.HeaderNav>
                    <Link to="/"><FiArrowLeft color="#fff" size="30" /></Link>
                </S.HeaderNav>
                <S.HeaderTitle>
                    <h1 style={{ fontSize: '16px', color: '#fff', fontWeight: '400' }}>Finalizar aluguel</h1>
                </S.HeaderTitle>
            </S.Header>

            <S.AnuncioContainer>
                <S.TittleAnuncio>Garagem disponível para aluguel diário</S.TittleAnuncio>
                <S.ContentInfoAnuncio>
                    <S.DivisionInfo>
                        <S.SectionInfo style={{ display: "flex" }}>
                            <S.ContentImageAnuncio src={foto} />
                        </S.SectionInfo>
                    </S.DivisionInfo>

                    <S.DivisionInfo>
                        <S.SectionInfo style={{ display: "block" }}>
                            <S.TittleLineInfo>Endereço</S.TittleLineInfo>
                            <S.ContentLineInfo>
                                <S.ParagrafoBInfo>Rua:</S.ParagrafoBInfo> Joâo Miguel
                            <S.ParagrafoBInfo>Número:</S.ParagrafoBInfo> 239
                            <S.ParagrafoBInfo>CEP:</S.ParagrafoBInfo> 39032-432
                            <S.ParagrafoBInfo>Bairro:</S.ParagrafoBInfo> Santana.
                            <S.ParagrafoBInfo>Cidade:</S.ParagrafoBInfo> São Paulo
                            </S.ContentLineInfo>
                        </S.SectionInfo>
                        <S.SectionInfo style={{ display: "block" }}>
                            <S.TittleLineInfo>Tipo de garagem</S.TittleLineInfo>
                            <S.ContentLineInfo>
                                <S.ParagrafoBInfo style={{ marginTop: "10px" }}>Tamanho:</S.ParagrafoBInfo> médio
                            <S.ParagrafoBInfo style={{ marginTop: "10px" }}>Veiculo:</S.ParagrafoBInfo> carro
                            </S.ContentLineInfo>
                        </S.SectionInfo>
                    </S.DivisionInfo>
                </S.ContentInfoAnuncio>
                <S.SectionInfo style={{ display: "block" }}>
                    <S.TittleLineInfo>Descrição</S.TittleLineInfo>
                    <S.ContentLineInfo>
                        <S.ParagrafoInfo>Garagem coberta;</S.ParagrafoInfo>
                        <S.ParagrafoInfo>Sobrado;</S.ParagrafoInfo>
                        <S.ParagrafoInfo>Casa com a parede verde;</S.ParagrafoInfo>
                    </S.ContentLineInfo>
                </S.SectionInfo>

                <S.AnuncioContainerFooter>
                    <S.TittleLineInfo>Descrição</S.TittleLineInfo>
                    <S.ContentItensFooter>

                        <S.ContentFooter>
                            <S.AvaliacaoAnuncio style={{ fontSize: "19px" }}>
                                Preço Diário:
                                </S.AvaliacaoAnuncio>
                            <S.AvaliacaoAnuncio style={{ fontSize: "30px", color: "#0752DE", fontWeight: "bold" }}>
                                R$ 15,00
                                </S.AvaliacaoAnuncio>
                        </S.ContentFooter>

                        <S.ContentFooter>
                            <S.AvaliacaoAnuncio style={{ fontSize: "19px" }}>
                                Quantidade de dias "icone"
                                </S.AvaliacaoAnuncio>
                        </S.ContentFooter>

                        <S.ContentFooter>
                            <S.Button>Finalizar Aluguel</S.Button>
                        </S.ContentFooter>

                    </S.ContentItensFooter>
                </S.AnuncioContainerFooter>
            </S.AnuncioContainer>


            <Footer />
        </div>
    )
}

export default FinalizarAluguel;