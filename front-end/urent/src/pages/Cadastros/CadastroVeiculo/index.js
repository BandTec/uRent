import React from 'react';

import HeaderCadastro from '../../../components/HeaderCadastro/index';
import FooterCadastro from '../../../components/FooterCadastro/index';

import * as S from '../style.js';

function CadastroVeiculo() {

    return (



        <S.Cadastro>

            <HeaderCadastro title="Cadastro Veiculo" />

            <S.CadastroContainer>

                <S.CadastroTitle>Veículo</S.CadastroTitle>

                <S.CadastroContentBox>

                    <S.CadastroContent>

                        <S.CadastroLabel>Placa</S.CadastroLabel>
                        <S.CadastroInput style={{ width: '94%' }} />

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


                <FooterCadastro />

            </S.CadastroContainer>

        </S.Cadastro>





    )

}


export default CadastroVeiculo;