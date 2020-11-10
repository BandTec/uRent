import React, { useEffect, useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';

import HeaderAnuncio from '../../components/HeaderAnuncio/index';
import Footer from '../../components/Footer';
import estrelaApagada from '../../assets/Star 5.png';
import estrelaLigada from '../../assets/Star 4.png';
import foto from '../../assets/garagemExemplo.png';
import teste from '../../assets/download.png';

import './style.css';

import * as S from './style';

function DetalhesAnuncio() {

    const [initialPosition, setInitialPosition] = useState([0, 0]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setInitialPosition([latitude, longitude])
        });
    }, [])

    return (
        <div>
            <HeaderAnuncio />

            <S.ContentAvaliacoesAnuncio>
                <S.MediaAnuncio>6.0</S.MediaAnuncio>
                <S.StarsAvaliacao>
                    <S.ContentStars><S.Stars src={estrelaLigada}></S.Stars></S.ContentStars>
                    <S.ContentStars><S.Stars src={estrelaLigada}></S.Stars></S.ContentStars>
                    <S.ContentStars><S.Stars src={estrelaLigada}></S.Stars></S.ContentStars>
                    <S.ContentStars><S.Stars src={estrelaApagada}></S.Stars></S.ContentStars>
                    <S.ContentStars><S.Stars src={estrelaApagada}></S.Stars></S.ContentStars>
                </S.StarsAvaliacao>
                <S.AvaliacaoAnuncio>6 avaliacoes</S.AvaliacaoAnuncio>
            </S.ContentAvaliacoesAnuncio>

            <S.AnuncioContainer>
                <S.TittleAnuncio>Garagem disponível para aluguel diário</S.TittleAnuncio>
                <S.ContentInfoAnuncio>
                    <S.DivisionInfo>
                        <S.SectionInfo style={{ display: "flex" }}>
                            <S.ContentImageAnuncio src={foto} />
                        </S.SectionInfo>
                        <S.SectionInfo style={{ display: "block" }}>
                            <S.TittleLineInfo>Descrição</S.TittleLineInfo>
                            <S.ContentLineInfo>
                                <S.ParagrafoInfo>Garagem coberta;</S.ParagrafoInfo>
                                <S.ParagrafoInfo>Sobrado;</S.ParagrafoInfo>
                                <S.ParagrafoInfo>Casa com a parede verde;</S.ParagrafoInfo>
                            </S.ContentLineInfo>
                        </S.SectionInfo>
                    </S.DivisionInfo>

                    <S.DivisionInfo>
                        <S.SectionInfo style={{ display: "block" }}>
                            <S.TittleLineInfo>Informações</S.TittleLineInfo>
                            <S.ContentLineInfo>
                                <S.ParagrafoBInfo>Rua:</S.ParagrafoBInfo> Joâo Miguel
                            <S.ParagrafoBInfo>Número:</S.ParagrafoBInfo> 239
                            <S.ParagrafoBInfo>CEP:</S.ParagrafoBInfo> 39032-432
                            <S.ParagrafoBInfo>Bairro:</S.ParagrafoBInfo> Santana.
                            <S.ParagrafoBInfo>Cidade:</S.ParagrafoBInfo> São Paulo
                            <S.ParagrafoBInfo style={{ marginTop: "10px" }}>Tipo de garagem:</S.ParagrafoBInfo> Carros
                            </S.ContentLineInfo>
                        </S.SectionInfo>
                        <S.SectionInfo style={{ display: "block" }}>
                            <S.ContentInfoBuy style={{ display: "block" }}>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <S.AvaliacaoAnuncio style={{ fontSize: "19px" }}>
                                        Preço Diário:
                                </S.AvaliacaoAnuncio>
                                    <S.AvaliacaoAnuncio style={{ fontSize: "30px", color: "#0752DE" }}>
                                        R$ 15,00
                                </S.AvaliacaoAnuncio>
                                </div>
                                <S.TittleBuy style={{ width: "100%", marginLeft: "0" }}>Contate o anunciante:</S.TittleBuy>
                                <S.ContentPreco>
                                    <S.ContentButton>
                                        <S.Button>Chat</S.Button>
                                        <S.Button>Alugar</S.Button>
                                    </S.ContentButton>
                                    <S.ContentButton>
                                        <S.Button>Voltar</S.Button>
                                    </S.ContentButton>
                                </S.ContentPreco>
                            </S.ContentInfoBuy>
                        </S.SectionInfo>
                    </S.DivisionInfo>
                </S.ContentInfoAnuncio>
            </S.AnuncioContainer>

            <S.Section>
                <S.SectionTitle>Localização</S.SectionTitle>

                <div className="leaflet-container">
                    <Map center={initialPosition} zoom={25} >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                    </Map>
                </div>
            </S.Section>

            <S.ContentComment>
                <S.InputComment placeholder="Deixe seu comentario..." ></S.InputComment>
            </S.ContentComment>

            <S.ContentComment>
                <S.ContainerCommentUser>
                    <S.ContainerUser>
                        <S.TeamCard>
                            <S.TeamCardPicture src={teste}></S.TeamCardPicture>
                            <S.ContentTeamInfo>Enzo Miguel</S.ContentTeamInfo>
                        </S.TeamCard>
                    </S.ContainerUser>

                    <S.ContainerUser>
                        <S.TeamCard style={{ flexDirection: "row-reverse" }}>
                            <S.StarsAvaliacao>
                                <S.ContentStars><S.Stars src={estrelaLigada}></S.Stars></S.ContentStars>
                                <S.ContentStars><S.Stars src={estrelaLigada}></S.Stars></S.ContentStars>
                                <S.ContentStars><S.Stars src={estrelaLigada}></S.Stars></S.ContentStars>
                                <S.ContentStars><S.Stars src={estrelaApagada}></S.Stars></S.ContentStars>
                                <S.ContentStars><S.Stars src={estrelaApagada}></S.Stars></S.ContentStars>
                            </S.StarsAvaliacao>
                            <S.MediaAnuncio>6.0</S.MediaAnuncio>
                        </S.TeamCard>
                    </S.ContainerUser>
                </S.ContainerCommentUser>
                <S.ContainerCommentUser>
                    Messagem do comentario..
                </S.ContainerCommentUser>
            </S.ContentComment>

            <Footer />
        </div>
    )
}

export default DetalhesAnuncio;