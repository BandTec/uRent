import React from 'react';
import { FaRegUser, FaKey } from 'react-icons/fa';


import logo from '../../assets/logo-reset.svg';
import * as S from '../Login/style';

function ResetSenha() {
    return (
        <div>
            <S.Welcome>
               
                <S.FormLogin>
                
                    <S.LogoImage><img src={logo} alt="Logo uRent" height="100%" /></S.LogoImage>
                    <S.Form>
                        <S.FormTitleEntrar>Esqueceu a senha?</S.FormTitleEntrar>
                        <S.FormTitleLabel2>Insira o endereço de email associado à sua conta, e digite uma nova senha.</S.FormTitleLabel2>
                        <S.FormData>
                            <FaRegUser style={{position: 'absolute', left: '3%'}} size='25' color='#FFFFFF' />
                            <S.FormInput placeholder="Email" placeholderTextColor='red'  />
                        </S.FormData>
                        <S.FormData>
                            <FaKey style={{position: 'absolute', left: '3%'}} size='25' color='#FFFFFF' />
                            <S.FormInput placeholder="Nova senha" placeholderTextColor='red'  />
                        </S.FormData>
                        <S.FormData>
                            <FaKey style={{position: 'absolute', left: '3%'}} size='25' color='#FFFFFF' />
                            <S.FormInput placeholder="Confirme nova senha" placeholderTextColor='red'  />
                        </S.FormData>
                        
                        <S.ButtonEntrar>Atualizar senha</S.ButtonEntrar>
                    </S.Form>
                    
                </S.FormLogin>
                
            </S.Welcome>
        </div>
    )
}



export default ResetSenha;