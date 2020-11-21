import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useHistory } from 'react-router-dom';
import { FiAlertOctagon } from 'react-icons/fi';

import api from '../../../service/api';

import HeaderCadastro from '../../../components/HeaderCadastro/index';

import * as S from '../style.js';

function CadastroVeiculo() {

  const [usuario, setUsuario] = useState({});

  const [placa, setPlaca] = useState("");

  const [tipoVeiculo, setTipoVeiculo] = useState([]);

  const [tipoVeiculoSelect, setTipoVeiculoSelect] = useState("");

  const history = useHistory();

  useEffect(() => {

    api.get(`usuarios/status`)
			.catch(() => {
				history.push('/login')
			})

    const id = sessionStorage.getItem("id");

    if (id == null) {

      history.push('/login')
    }

    api.get(`/usuarios/${id}`)
      .then(response => {
        setUsuario(response.data);
      })
      .catch(error => {
        console.log(error)
      })


    api.get(`/tipo-veiculos`)
      .then(response => {
        console.log(response.data)
        setTipoVeiculo(response.data);
      })
      .catch(error => {
        console.log(error)
      })

  }, [])


  function cadastroVeic() {

    api.post('veiculos', {
        "placa": placa,
        "usuario": usuario,
        "tipoVeiculo": tipoVeiculo[tipoVeiculoSelect - 1]

    })
        .then(response => {
            alert('Veiculo Cadastrado!');
            console.log(response);
        }).catch(error => {
            alert('Não Cadastrou!');
            console.log(error);
        })

  }


  return (

    <S.Cadastro>

      <HeaderCadastro title="Cadastro Veiculo" />

      <S.CadastroContainer>

        <S.CadastroTitle>Veículo</S.CadastroTitle>

        <S.CadastroContentBox>

          <S.CadastroContent>

            <S.CadastroLabel>Placa</S.CadastroLabel>
            <InputMask mask='9999999' onChange={e => setPlaca(e.target.value)}>
              {() =>
                <S.CadastroInput />
              }
            </InputMask>

          </S.CadastroContent>

          <S.CadastroContent>

            <S.CadastroLabel>Tipo</S.CadastroLabel>

            <S.CadastroSelect title="Tipo de veiculo" onChange={e => setTipoVeiculoSelect(e.target.value)}>

              <option value=""></option>
              {tipoVeiculo.map(tipoVeiculo =>
                <option value={tipoVeiculo.id}>{tipoVeiculo.tipo}</option>
              )}

            </S.CadastroSelect>

          </S.CadastroContent>

        </S.CadastroContentBox>

        <div style={{ width: '100%' }}>
          <S.CadastroLabel>Fotos</S.CadastroLabel>
          <S.CadastroInput type="file" />

        </div>

        <S.Footer>
          <S.FooterAlert>
            <FiAlertOctagon color="#8257E5" size="35" style={{ alignSelf: 'flex-start' }} />
            <S.FooterText>Importante! Preencha todos os dados</S.FooterText>
          </S.FooterAlert>
          <S.FooterButton onClick={cadastroVeic}>Salvar Cadastro</S.FooterButton>
        </S.Footer>

      </S.CadastroContainer>

    </S.Cadastro>





  )

}


export default CadastroVeiculo;