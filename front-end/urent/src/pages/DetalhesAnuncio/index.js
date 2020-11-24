import React, { useEffect, useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';

import api from '../../service/api';

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

    const [anuncio, setAnuncio] = useState({});
    const [garagem, setGaragem] = useState({});
    const [endereco, setEndereco] = useState({});
    const [tipoVeiculo, setTipoVeiculo] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setInitialPosition([latitude, longitude])
        });
    }, [])

    useEffect(() => {
        
        api.get(`/anuncios/${11}`)
            .then(response => {
                setAnuncio(response.data);
            })
            .catch(error => {
                console.log(error)
            })

        api.get(`/garagens/${7}`)
            .then(response => {
                setGaragem(response.data);
            })
            .catch(error => {
                console.log(error)
            })

        api.get(`/tipo-veiculos/${3}`)
            .then(response => {
                setTipoVeiculo(response.data);
                console.log("Chegou aqui")
            })
            .catch(error => {
                console.log(error)
            })

        api.get(`https://viacep.com.br/ws/01001000/json/`)
            .then(response => {
                setEndereco(response.data);
            })
            .catch(error => {
                console.log(error)
            })

            // const avaliacaoAnuncio = garagem.avaliacao;
            // CarregarEstrelas(avaliacaoAnuncio);
            
    }, [])


    
function CarregarEstrelas(nota){

    console.log("AAA" + nota);
    nota = nota/2; 

if (nota >= 4.7){ 
    document.getElementById("i1").src = estrelaLigada;
    document.getElementById("i2").src = estrelaLigada;
    document.getElementById("i3").src = estrelaLigada;
    document.getElementById("i4").src = estrelaLigada;
    document.getElementById("i5").src = estrelaLigada;
 
   }else if (nota >= 3.7){ 
    document.getElementById("i1").src = estrelaLigada;
    document.getElementById("i2").src = estrelaLigada;
    document.getElementById("i3").src = estrelaLigada;
    document.getElementById("i4").src = estrelaLigada;
    document.getElementById("i5").src = estrelaApagada;

   }else if (nota >= 2.7){ 
    document.getElementById("i1").src = estrelaLigada;
    document.getElementById("i2").src = estrelaLigada;
    document.getElementById("i3").src = estrelaLigada;
    document.getElementById("i4").src = estrelaApagada;
    document.getElementById("i5").src = estrelaApagada;

    } else if (nota >= 1.7){ 
    document.getElementById("i1").src = estrelaLigada;
    document.getElementById("i2").src = estrelaLigada;
    document.getElementById("i3").src = estrelaApagada;
    document.getElementById("i4").src = estrelaApagada;
    document.getElementById("i5").src = estrelaApagada;

} else if (nota >= 0.7){
    document.getElementById("i1").src = estrelaLigada;
    document.getElementById("i2").src = estrelaApagada;
    document.getElementById("i3").src = estrelaApagada;
    document.getElementById("i4").src = estrelaApagada;
    document.getElementById("i5").src = estrelaApagada;
   }else{
    document.getElementById("i1").src = estrelaApagada;
    document.getElementById("i2").src = estrelaApagada;
    document.getElementById("i3").src = estrelaApagada;
    document.getElementById("i4").src = estrelaApagada;
    document.getElementById("i5").src = estrelaApagada;
   }
}

    return (
        <div>
            <HeaderAnuncio />
            <S.ContentAvaliacoesAnuncio>
                <S.MediaAnuncio>{garagem.avaliacao}.0</S.MediaAnuncio>
                <S.StarsAvaliacao>
                    <S.ContentStars><S.Stars id="i1" src={estrelaLigada}></S.Stars></S.ContentStars>
                    <S.ContentStars><S.Stars id="i2" src={estrelaApagada}></S.Stars></S.ContentStars>
                    <S.ContentStars><S.Stars id="i3" src={estrelaApagada}></S.Stars></S.ContentStars>
                    <S.ContentStars><S.Stars id="i4" src={estrelaApagada}></S.Stars></S.ContentStars>
                    <S.ContentStars><S.Stars id="i5" src={estrelaLigada}></S.Stars></S.ContentStars>
                </S.StarsAvaliacao>
                <S.AvaliacaoAnuncio>6 avaliacoes</S.AvaliacaoAnuncio>
            </S.ContentAvaliacoesAnuncio>

            <S.AnuncioContainer>
                <S.TittleAnuncio>{anuncio.titulo}</S.TittleAnuncio>
                <S.ContentInfoAnuncio>
                    <S.DivisionInfo>
                        <S.SectionInfo style={{ display: "flex" }}>
                            <S.ContentImageAnuncio src={foto} />
                        </S.SectionInfo>
                        <S.SectionInfo style={{ display: "block" }}>
                            <S.TittleLineInfo>Complemento</S.TittleLineInfo>
                            <S.ContentLineInfo>
                                <S.ParagrafoInfo>{endereco.complemento};</S.ParagrafoInfo>
                            </S.ContentLineInfo>
                        </S.SectionInfo>
                    </S.DivisionInfo>

                    <S.DivisionInfo>
                        <S.SectionInfo style={{ display: "block" }}>
                            <S.TittleLineInfo>Informações</S.TittleLineInfo>
                            <S.ContentLineInfo>
                                <S.ParagrafoBInfo>Rua:</S.ParagrafoBInfo> {endereco.logradouro}
                                <S.ParagrafoBInfo>Número:</S.ParagrafoBInfo> {garagem.numero}
                                <S.ParagrafoBInfo>CEP:</S.ParagrafoBInfo> {garagem.cep}
                                <S.ParagrafoBInfo>Bairro:</S.ParagrafoBInfo> {endereco.bairro}
                                <S.ParagrafoBInfo>Cidade:</S.ParagrafoBInfo> {endereco.localidade} - {endereco.uf}
                                <S.ParagrafoBInfo style={{ marginTop: "10px" }}>
                                    Tipo de garagem:</S.ParagrafoBInfo>{tipoVeiculo.tipo}
                            </S.ContentLineInfo>
                        </S.SectionInfo>
                        <S.SectionInfo style={{ display: "block" }}>
                            <S.ContentInfoBuy style={{ display: "block" }}>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <S.AvaliacaoAnuncio style={{ fontSize: "19px" }}>
                                        Preço Diário:
                                </S.AvaliacaoAnuncio>
                                    <S.AvaliacaoAnuncio style={{ fontSize: "30px", color: "#0752DE" }}>
                                        R$ {anuncio.valorDiaria},00
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
                <S.SectionTitle>Localização aproximada da vaga</S.SectionTitle>

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
            {/* <button onClick={}>aaa</button> */}
            <Footer />
        </div>
    )
}

export default DetalhesAnuncio;