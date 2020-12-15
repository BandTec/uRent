import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import axios from 'axios';

import api from '../../service/api';

import HeaderAnuncio from '../../components/HeaderAnuncio/index';
import Footer from '../../components/Footer';
import foto from '../../assets/garagemExemplo.png';

import * as S from './style';

function FinalizarAluguel() {

  const [anuncio, setAnuncio] = useState({});
  const [garagem, setGaragem] = useState({});
  const [endereco, setEndereco] = useState({});
  const [imagem, setImagem] = useState({});
  const [tipoVeiculo, setTipoVeiculo] = useState({});

  const [dataInicio, setDataInicio] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [precoFinal, setPrecoFinal] = useState('');

  const [pagador, setPagador] = useState([]);
  const [enderecoPagador, setEnderecoPagador] = useState([]);

  const anuncioId = sessionStorage.getItem('anuncio');
  const id = sessionStorage.getItem('id');

  const history = useHistory();

  useEffect(() => {

    api.get(`usuarios/status`)
      .catch(() => {
        history.push('/login')
      })

    api.get(`usuarios/${id}`)
      .then(response => {
        setPagador(response.data);

        api.get(`https://viacep.com.br/ws/${response.data.cep}/json`)
          .then(response => {
            setEnderecoPagador(response.data)
          })
      })

    api.get(`/anuncios/${anuncioId}`)
      .then(response => {
        setAnuncio(response.data);
        setGaragem(response.data.garagem);

        api.get(`/imagens/files/garagem/${response.data.garagem.id}`)
          .then(response => {
            console.log(response.data.url)
            setImagem(response.data.url);
          })
          .catch(error => {
            console.log('Erro ao buscar imagem, recarregue a página')
            console.log(error);
          })

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

  function pagarReserva() {

    let data = new Date;

    api.get(`https://viacep.com.br/ws/${garagem.usuario.cep}/json`)
      .then(response => {
        const boletoPagar = {
          pagador: {
            nome: pagador.nome,
            RegistroNacional: pagador.cpf,
            endereco: {
              logradouro: enderecoPagador.logradouro,
              bairro: enderecoPagador.bairro,
              cidade: enderecoPagador.cidade,
              estadoUF: enderecoPagador.uf,
              cep: pagador.cep
            }
          },
          instrucoes: ['Após o vencimento sua reserva será encerrada e ficará disponível para outros usuários'],
          beneficiario: {
            nome: garagem.usuario.nome,
            cnpj: garagem.usuario.cpf,
            dadosBancarios: {
              carteira: '09',
              agencia: '0101',
              agenciaDigito: '5',
              conta: '0326446',
              contaDigito: '0',
              nossoNumero: '00000000061',
              nossoNumeroDigito: '8'
            },
            endereco: {
              logradouro: response.data.logradouro,
              bairro: response.data.bairro,
              cidade: response.data.cidade,
              estadoUF: response.data.uf,
              cep: response.data.cep
            }
          },
          boleto: {
            numeroDocumento: '1001',
            especieDocumento: 'DM',
            valor: precoFinal,
            datas: {
              vencimento: `${data.getDate() + 3}/${data.getMonth() + 1}/${data.getFullYear()}`,
              processamento: `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`,
              documentos: `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
            }
          }
        };

        axios.post('http://localhost:2000/pagar', {
          boletoPagar: boletoPagar
        })
          .then(() => {
            alert('Boleto gerado com sucesso');
            axios.get('http://localhost:2000/dowload')
            .then(response => {
              console.log(response.data)
            })
          })
          .catch(error => {
            alert('Erro ao gerar boleto, tente novamente');
            console.log(error);
          })
      })


  }

  function valorFinal() {
    let diaFinal = dataFinal.split('-');
    let diaInicial = dataInicio.split('-');
    setPrecoFinal((diaFinal[2] - diaInicial[2]) * anuncio.valorDiaria)
  }

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
              <S.ContentImageAnuncio src={imagem} />
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

          <div style={{ width: '100%', height: '5vh', margin: '3vh auto', display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ width: '40%' }}>
              <S.Label>Data início:</S.Label>
              <S.File type="date" onChange={e => setDataInicio(e.target.value)} />
            </div>

            <div style={{ width: '40%' }}>
              <S.Label>Data final:</S.Label>
              <S.File type="date" onChange={e => setDataFinal(e.target.value)} />
            </div>

            <S.Calcular onClick={() => valorFinal()}>Calcular</S.Calcular>
          </div>
        </S.SectionInfo>

        <S.AnuncioContainerFooter>
          <S.TittleLineInfo>Concluir</S.TittleLineInfo>
          <S.ContentItensFooter>

            <S.ContentFooter>
              <S.AvaliacaoAnuncio style={{ fontSize: "19px" }}>
                Valor final:
                                </S.AvaliacaoAnuncio>
              <S.AvaliacaoAnuncio style={{ fontSize: "30px", color: "#0752DE", fontWeight: "bold" }}>
                R$ {precoFinal}
              </S.AvaliacaoAnuncio>
            </S.ContentFooter>

            <S.ContentFooter>
              <S.AvaliacaoAnuncio style={{ fontSize: "19px" }}>
                Quantidade de dias "icone"
                                </S.AvaliacaoAnuncio>
            </S.ContentFooter>

            <S.ContentFooter>
              <S.Button onClick={pagarReserva}>Finalizar Aluguel</S.Button>
            </S.ContentFooter>

          </S.ContentItensFooter>
        </S.AnuncioContainerFooter>
      </S.AnuncioContainer>

      <Footer />
    </div>
  )
}


export default FinalizarAluguel;