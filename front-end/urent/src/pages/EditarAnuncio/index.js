import React, { useState, useEffect } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FiAlertOctagon } from 'react-icons/fi';

import { Link, useHistory } from 'react-router-dom';

import api from '../../service/api';

import HeaderCadastro from '../../components/HeaderCadastro/index';

import * as S from '../Cadastros/style.js';

function CadastroAnuncio() {

  const [titulo, setTitulo] = useState("");
  const [valorDiaria, setValorDiaria] = useState("");
  const [tipoVeiculo, setTipoVeiculo] = useState("");
  const [garagem, setGaragem] = useState(0);

  const [garagensUsuarios, setGaragensUsuarios] = useState([]);
  const [tipoVeiculoUsuarios, setTipoVeiculoUsuarios] = useState([]);

  const history = useHistory();

  useEffect(() => {

    const idUsuario = sessionStorage.getItem("id");

    api.get(`usuarios/status`)
      .catch(() => {
        history.push('/login')
      })

    api.get(`/garagens/usuario/${idUsuario}`)
      .then(response => {
        setGaragensUsuarios(response.data)
      })
      .catch(error => {
        alert('Erro ao buscar garagens do usuário, recarregue a página')
        console.log(error)
      })

    api.get(`/tipo-veiculos`)
      .then(response => {
        setTipoVeiculoUsuarios(response.data)
      })
      .catch(error => {
        alert('Erro ao buscar tipos de veículos, recarregue a página')
        console.log(error)
      })


  }, [])

  function editarAnuncio() {

    const id = sessionStorage.getItem("anuncio-edit");


    let garagemCadastro;

    for (let i = 0; i < garagensUsuarios.length; i++) {
      if (garagensUsuarios[i].id == garagem) {
        garagemCadastro = garagensUsuarios[i];
      }
    }

    api.put(`/anuncios/${id}`, {
      "titulo": titulo,
      "valorDiaria": valorDiaria,
      "tipoVeiculo": tipoVeiculoUsuarios[tipoVeiculo - 1].id,
      "garagem": garagemCadastro
    })
      .then(() => {
        alert("Anuncio atualizado com sucesso!");
        history.push('/meus-anuncios');
      })
      .catch(error => {
        alert("Erro ao atualizar anúncio, tente novamente!");
        console.log(error);
      })
  }

  return (

    <S.Cadastro>
      <HeaderCadastro title="Editar Anuncio" />

      <S.CadastroContainer>


        <S.CadastroTitle>Anúncio</S.CadastroTitle>

        <div style={{ width: '100%' }}>
          <S.CadastroLabel>Título do anúncio</S.CadastroLabel>
          <S.CadastroInput id={"txtTitulo"} onChange={e => setTitulo(e.target.value)} />
        </div>

        <S.CadastroContentBox>

          <S.CadastroContent>
            <div>
              <S.CadastroLabel style={{ marginRight: '6px' }}>Seleciona a garagem</S.CadastroLabel>
              <AiOutlineInfoCircle color='#9C98A6' size='20' />
            </div>
            <S.CadastroSelect id={"txtGaragem"} title="Selecionar a garagem" onChange={e => setGaragem(e.target.value)} >

              <option selected disabled>Selecione</option>
              {
                garagensUsuarios.length > 0 ?
                  garagensUsuarios.map(garagem =>
                    <option key={garagem.id} value={garagem.id}>{garagem.cep}</option>
                  )
                  :
                  ""
              }
            </S.CadastroSelect>

          </S.CadastroContent>

          <S.CadastroContent>
            <Link to="/cadastro-garagem">
              <S.CadastroLabel2 style={{ color: "#0752DE", border: '1px solid', borderRadius: '15px', textAlign: 'center', marginTop: '5vh' }}>+ Adicionar nova garagem </S.CadastroLabel2>
            </Link>
          </S.CadastroContent>

        </S.CadastroContentBox>

        <S.CadastroContentBox>

          <S.CadastroContent>
            <div>
              <S.CadastroLabel style={{ marginRight: '6px' }}>Tipo de veículo</S.CadastroLabel>
              <AiOutlineInfoCircle color='#9C98A6' size='20' />
            </div>
            <S.CadastroSelect title="Tipo de veiculo" onChange={e => setTipoVeiculo(e.target.value)}>

              <option id={"txtTipoVeiculo"} selected disabled>Selecione</option>
              {
                tipoVeiculoUsuarios.map(tipoVeiculo =>
                  <option key={tipoVeiculo.id} value={tipoVeiculo.id}>{tipoVeiculo.tipo}</option>
                )
              }
            </S.CadastroSelect>

          </S.CadastroContent>

          <S.CadastroContent>
            <S.CadastroLabel>Valor (diária)</S.CadastroLabel>
            <S.CadastroInput id={"txtDiaria"} style={{ width: '94%' }} onChange={e => setValorDiaria(e.target.value)} />
          </S.CadastroContent>

        </S.CadastroContentBox>


        <S.Footer>
          <S.FooterAlert>
            <FiAlertOctagon color="#8257E5" size="35" style={{ alignSelf: 'flex-start' }} />
            <S.FooterText>Importante! Preencha todos os dados</S.FooterText>
          </S.FooterAlert>
          <S.FooterButton onClick={editarAnuncio}>Editar Anuncio</S.FooterButton>
        </S.Footer>

      </S.CadastroContainer>
    </S.Cadastro>


  )
}

export default CadastroAnuncio;