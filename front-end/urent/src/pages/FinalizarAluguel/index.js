import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../service/api';

import HeaderAnuncio from '../../components/HeaderAnuncio/index';
import Footer from '../../components/Footer';
import foto from '../../assets/garagemExemplo.png';

import * as S from './style';

function FinalizarAluguel() {

    const [anuncio, setAnuncio] = useState({});
    const [garagem, setGaragem] = useState({});
    const [endereco, setEndereco] = useState({});
    const [tipoVeiculo, setTipoVeiculo] = useState({});

    const anuncioId = sessionStorage.getItem('anuncio');

    const history = useHistory();

    useEffect(() => {

        api.get(`usuarios/status`)
			.catch(() => {
				history.push('/login')
			})

        api.get(`/anuncios/${anuncioId}`)
            .then(response => {
                setAnuncio(response.data);
                setGaragem(response.data.garagem);

                api.get(`/tipo-veiculos/${response.data.tipoVeiculo}`)
                    .then(response => {
                        setTipoVeiculo(response.data);
                        console.log("Chegou aqui")
                    })
                    .catch(error => {
                        alert('Erro ao buscar tipo do veículo, recarregue a página')
                        console.log(error)
                    })

                api.get(`https://viacep.com.br/ws/${response.data.garagem.cep}/json/`)
                    .then(response => {
                        setEndereco(response.data);
                    })
                    .catch(error => {
                        alert('Erro ao buscar dados do endereço, recarregue a página')
                        console.log(error)
                    })
            })
            .catch(error => {
                alert('Erro ao buscar anúncio, recarregue a página')
                console.log(error)
            })
    }, [])

    return (
        <div>
            <HeaderAnuncio />
            <S.Header>
                <S.HeaderNav>
                    <Link to="/detalhes-anuncio"><FiArrowLeft color="#fff" size="30" /></Link>
                </S.HeaderNav>
                <S.HeaderTitle>
                    <h1 style={{ fontSize: '16px', color: '#fff', fontWeight: '400' }}>Finalizar aluguel</h1>
                </S.HeaderTitle>
            </S.Header>

            <S.AnuncioContainer>
                <S.TittleAnuncio>{anuncio.titulo}</S.TittleAnuncio>
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
                                <S.ParagrafoBInfo>Rua:</S.ParagrafoBInfo> {endereco.logradouro}
                                <S.ParagrafoBInfo>Número:</S.ParagrafoBInfo> {garagem.numero}
                                <S.ParagrafoBInfo>CEP:</S.ParagrafoBInfo> {garagem.cep}
                                <S.ParagrafoBInfo>Bairro:</S.ParagrafoBInfo> {endereco.bairro}
                                <S.ParagrafoBInfo>Cidade:</S.ParagrafoBInfo> {endereco.localidade} - {endereco.uf}
                            </S.ContentLineInfo>
                        </S.SectionInfo>
                        <S.SectionInfo style={{ display: "block" }}>
                            <S.TittleLineInfo>Tipo de garagem</S.TittleLineInfo>
                            <S.ContentLineInfo>
                                <S.ParagrafoBInfo style={{ marginTop: "10px" }}>Tamanho:</S.ParagrafoBInfo>{tipoVeiculo.tipo === 'Caminhão' ? 'Grande' : tipoVeiculo.tipo === 'Carro' ? 'Médio' : tipoVeiculo.tipo === 'Moto' ? 'Pequeno' : ''}
                            <S.ParagrafoBInfo style={{ marginTop: "10px" }}>Veiculo:</S.ParagrafoBInfo> {tipoVeiculo.tipo}
                            </S.ContentLineInfo>
                        </S.SectionInfo>
                    </S.DivisionInfo>
                </S.ContentInfoAnuncio>
                <S.SectionInfo style={{ display: "block" }}>
                    <S.TittleLineInfo>Complemento</S.TittleLineInfo>
                    <S.ContentLineInfo>
                        <S.ParagrafoInfo>{endereco.complemento};</S.ParagrafoInfo>
                    </S.ContentLineInfo>
                </S.SectionInfo>

                <S.AnuncioContainerFooter>
                    <S.TittleLineInfo>Concluir</S.TittleLineInfo>
                    <S.ContentItensFooter>

                        <S.ContentFooter>
                            <S.AvaliacaoAnuncio style={{ fontSize: "19px" }}>
                                Preço Diário:
                                </S.AvaliacaoAnuncio>
                            <S.AvaliacaoAnuncio style={{ fontSize: "30px", color: "#0752DE", fontWeight: "bold" }}>
                                R$ {anuncio.valorDiaria}
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