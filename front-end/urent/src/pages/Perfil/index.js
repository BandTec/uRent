import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/HeaderCadastro/index';
import fotoPerfil from '../../assets/user.png';
import estrelaApagada from '../../assets/Star 5.png';
import estrelaLigada from '../../assets/Star 4.png';


import * as S from '../Perfil/style';

function FormularioPerfil() {
    return (

        <div>

            <Header title="Perfil" />

            <div>
                <S.Welcome>

                    <S.FormPerfil>

                        <S.ContainerPerfil>

                            <S.BoxPerfil>

                                <div>
                                    <S.FormTitle>Nome</S.FormTitle>
                                    <S.FormInfo>Vinicius</S.FormInfo>

                                </div>

                                <div>
                                    <S.FormTitle>CPF</S.FormTitle>
                                    <S.FormInfo>123456</S.FormInfo>

                                </div>

                                <div>
                                    <S.FormTitle>Data de Nascimento</S.FormTitle>
                                    <S.FormInfo>09/08/2000</S.FormInfo>

                                </div>

                                <div>
                                    <S.FormTitle>CNH</S.FormTitle>
                                    <S.FormInfo>9876543</S.FormInfo>

                                </div>

                            </S.BoxPerfil>

                            <S.BoxContentDados>

                                <S.BoxImgPerfil>

                                    <S.Image src={fotoPerfil} />

                                </S.BoxImgPerfil>


                                <S.BoxPerfilStars>
                                    <img src={estrelaLigada} alt="Estrela Ligada" ></img>
                                    <img src={estrelaLigada} alt="Estrela Ligada" ></img>
                                    <img src={estrelaLigada} alt="Estrela Ligada" ></img>
                                    <img src={estrelaLigada} alt="Estrela Ligada" ></img>
                                    <img src={estrelaApagada} alt="Estrela apagada" ></img>
                                </S.BoxPerfilStars>

                            </S.BoxContentDados>

                        </S.ContainerPerfil>

                        <div>
                            <S.FormTitle>Endereco</S.FormTitle>
                            <S.FormInfo>Rua Águas Claras</S.FormInfo>

                        </div>

                        <div>
                            <S.FormTitle>E-mail</S.FormTitle>
                            <S.FormInfo>vinicius@gmail.com</S.FormInfo>

                        </div>



                        <div style={{ display: 'flex', marginTop: '-10px' }}>

                            <div>
                                <S.FormTitle>Senha</S.FormTitle>
                                <S.FormInfo>09283</S.FormInfo>
                            </div>


                            <Link to="/reset-senha">
                                <S.Button>Alterar Senha</S.Button>
                            </Link>
                        </div>



                    </S.FormPerfil>


                </S.Welcome>

            </div>


        </div >



    )
}

export default FormularioPerfil;



