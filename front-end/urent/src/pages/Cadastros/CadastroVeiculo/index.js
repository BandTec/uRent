import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';



import api from '../../../service/api';

import HeaderCadastro from '../../../components/HeaderCadastro/index';
import FooterCadastro from '../../../components/FooterCadastro/index';

import * as S from '../style.js';

function CadastroVeiculo() {

    const [usuario, setUsuario] = useState({});

    const [placa, setPlaca] = useState("");


    // const [tipo, setTipoVeiculo] = useState("");


    useEffect(() => {

        const id = sessionStorage.getItem("id");

        api.get(`/usuarios/${id}`)
            .then(response => {
                setUsuario(response.data);
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    function cadastroVeic() {

        api.post('veiculos', {
            "placa": placa,
            "usuario": usuario,
            "tipoVeiculo": {
                "id": 2,
                "tipo": "Moto"
            }


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

                        <S.CadastroSelect title="Tipo de veiculo">

                            <option value=""></option>
                            <option value="hatch">Carro Hatch</option>
                            <option value="sedan">Carro Sedan</option>
                            <option value="suv">Carro SUV</option>
                            <option value="moto">Moto</option>
                            <option value="caminhao">Caminhão</option>

                        </S.CadastroSelect>

                    </S.CadastroContent>

                </S.CadastroContentBox>

                <div style={{ width: '100%' }}>
                    <S.CadastroLabel>Fotos</S.CadastroLabel>
                    <S.CadastroInput type="file" />

                </div>

                <button onClick={cadastroVeic}>Cadastrar</button>


                <FooterCadastro />

            </S.CadastroContainer>

        </S.Cadastro>





    )

}


export default CadastroVeiculo;