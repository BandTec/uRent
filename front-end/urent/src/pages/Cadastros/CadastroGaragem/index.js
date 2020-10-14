import React from 'react';

import FooterCadastro from '../../../components/FooterCadastro/index';
import HeaderCadastro from '../../../components/HeaderCadastro/index';

import * as S from '../style.js';

function CadastroGaragem() {
        return (

                <S.Cadastro>

                        <HeaderCadastro title="Cadastro Garagem" />


                        <S.CadastroContainer>

                                <S.CadastroTitle>Garagem</S.CadastroTitle>

                               

                                <S.CadastroContentBox>

                                        <S.CadastroContent>
                                                <S.CadastroLabel>RUA</S.CadastroLabel>
                                                <S.CadastroInput style={{ width: '94%' }} />
                                        </S.CadastroContent>

                                        <S.CadastroContent>

                                                <S.CadastroLabel>Bairro</S.CadastroLabel>
                                                <S.CadastroInput style={{ width: '93%' }} />

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

export default CadastroGaragem;