import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosStar } from 'react-icons/io';

import HeaderAnuncio from '../../components/HeaderAnuncio/index';
import FiltroBusca from '../../components/FiltroBusca/index';
import Footer from '../../components/Footer';

import api from '../../service/api';
import carregarEstrelas from '../Functions';

import foto from '../../assets/garagemExemplo.png';

import * as S from './style';
import { GiConsoleController } from 'react-icons/gi';

function Feed() {

  const [anuncios, setAnuncios] = useState([]);
  const [imagens, setImagens] = useState([]);

  const history = useHistory();

  useEffect(() => {

    api.get(`usuarios/status`)
      .catch(() => {
        history.push('/login')
      })

    api.get('/anuncios/feed')
      .then((response) => {
        setAnuncios(response.data);
        const avaliacaoAnuncio = response.data.avaliacao;
        carregarEstrelas(avaliacaoAnuncio);
      })
      .catch((error) => {
        console.log(error)
      })

    api.get('/imagens/files/')
      .then(response => {
        setImagens(response.data);
      })
      .catch(error => {
        alert('Erro ao buscar imagens');
        console.log(error);
      })
  }, [])

  function acharImagem(idGaragem) {
    for(let i = 0; i < imagens.length; i++) {
      if(idGaragem === imagens[i].idGaragem) {
        return imagens[i].fileUri;
      }
    }
  }

  // useEffect(() => {
  //   anuncios.map(logradouro =>
  //     api.get(`https://viacep.com.br/ws/${logradouro.cep}/json`)
  //       .then(response => {
  //         logradouros.push(response.data)
  //       })
  //   )
  // }, [anuncios])

  return (
    <div>
      <HeaderAnuncio cadastro="/cadastro-anuncio" />
      <FiltroBusca />

      <div>
        {
          anuncios.map(anuncio =>
            <S.FeedContainer key={anuncio.id} onClick={() => { history.push('/detalhes-anuncio'); sessionStorage.setItem('anuncio', anuncio.id) }}>
              <S.FeedTitle>{anuncio.titulo}</S.FeedTitle>
              <S.FeedSection>

                <div>
                  {
                    <img src={acharImagem(anuncio.idGaragem)} height="250px" width="300px" alt="Foto do anúncio" />
                  }
                  <S.FeedSection>
                    <label style={{ fontWeight: '500' }}>{anuncio.avaliacao != null ? anuncio.avaliacao : "Não avaliado"}</label>
                  </S.FeedSection>
                </div>
                <S.FeedContent>

                  <S.FeedContentTitle>Localização</S.FeedContentTitle>

                  <S.FeedContentSection>

                    <S.SectionTitle>Endereço:
											<S.SectionData>
                        { }
                      </S.SectionData>
                    </S.SectionTitle>
                    <S.SectionTitle>Nº: <S.SectionData>{anuncio.numero}</S.SectionData></S.SectionTitle> <S.SectionTitle>CEP: <S.SectionData>{anuncio.cep}</S.SectionData></S.SectionTitle>
                    <S.SectionTitle>Cidade: <S.SectionData>{ }</S.SectionData></S.SectionTitle>

                  </S.FeedContentSection>
                  <S.SectionTitle>Tipo de Garagem: <S.SectionData>{anuncio.tipo}</S.SectionData></S.SectionTitle>
                  <S.SectionPreco style={{ alignSelf: 'center' }}>Preço diário: <S.SectionData>R${anuncio.valorDiaria}</S.SectionData></S.SectionPreco>

                </S.FeedContent>


              </S.FeedSection>
            </S.FeedContainer>
          )
        }


      </div>

      <Footer />

    </div>
  );
}

export default Feed;