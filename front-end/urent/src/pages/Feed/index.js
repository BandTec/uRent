import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosStar } from 'react-icons/io';

import HeaderAnuncio from '../../components/HeaderAnuncio/index';
import FiltroBusca from '../../components/FiltroBusca/index';
import Footer from '../../components/Footer';

import api from '../../service/api';

import foto from '../../assets/garagemExemplo.png';

import * as S from './style';

function Feed() {

  const [anuncios, setAnuncios] = useState([]);
  const [endereco, setEndereco] = useState(['rua']);
  let logradouros = [];

  const history = useHistory();

  // logradouros.push('Rua Zeze')

  useEffect(() => {
    api.get('/anuncios/feed')
      .then((response) => {
        // console.log(response.data)
        setAnuncios(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    for(let i = 0; i < anuncios.length; i++) {
      api.get(`https://viacep.com.br/ws/${anuncios[i].cep}/json`)
      .then(response => {
        logradouros.push({
          "rua": response.data.logradouro
        })
      })
    }
    setEndereco({logradouros: logradouros});
    // endereco.logradouros.map(logradouro =>
    //   console.log(logradouro + " teste")
    // )
  }, [anuncios])

  // console.log(endereco);

  return (
    <div>
      <HeaderAnuncio cadastro="/cadastro-anuncio" />
      <FiltroBusca />

      <div>
        {
          anuncios.map(anuncio =>
            <S.FeedContainer key={anuncio.id} onClick={() => {history.push('/detalhes-anuncio'); sessionStorage.setItem('anuncio', anuncio.id)}}>
              <S.FeedTitle>{anuncio.titulo}</S.FeedTitle>
              <S.FeedSection>

                <div>
                  <img src={foto} height="250px" alt="Foto do anúncio" />
                  <S.FeedSection>
                    <label style={{ fontWeight: '500' }}>6.0</label>
                    <div>
                      <IoIosStar size="20" color="#FDF53B" />
                      <IoIosStar size="20" color="#FDF53B" />
                      <IoIosStar size="20" color="#FDF53B" />
                      <IoIosStar size="20" color="#C4C4C4" />
                      <IoIosStar size="20" color="#C4C4C4" />
                    </div>
                  </S.FeedSection>
                </div>
                <S.FeedContent>

                  <S.FeedContentTitle>Localização</S.FeedContentTitle>

                  <S.FeedContentSection>

                    <S.SectionTitle>Endereço:
											<S.SectionData>
                        {
                          endereco.logradouros.map(logradouro =>
                          console.log(logradouro + " teste")
                          )}
                      </S.SectionData>
                    </S.SectionTitle>
                    <S.SectionTitle>Nº: <S.SectionData>{anuncio.numero}</S.SectionData></S.SectionTitle> <S.SectionTitle>CEP: <S.SectionData>{anuncio.cep}</S.SectionData></S.SectionTitle>
                    <S.SectionTitle>Cidade: <S.SectionData>{ }</S.SectionData></S.SectionTitle>

                  </S.FeedContentSection>
                  <S.SectionTitle>Tipo de Garagem: <S.SectionData>{anuncio.tipo}</S.SectionData></S.SectionTitle>
                  <S.SectionPreco style={{ alignSelf: 'center' }}>Preço diário: <S.SectionData>{anuncio.valorDiaria}</S.SectionData></S.SectionPreco>

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