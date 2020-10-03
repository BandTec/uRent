import React from 'react';
import {FaUser,FaKey} from 'react-icons/fa';


import logo from '../../assets/logoLogin.svg';
import * as S from '../Login/style';

function Login(){
    return (
        <div>
           <S.Welcome>
           
           <S.FormLogin>

            <S.LogoImage><img src={logo} alt="Logo uRent" height="100%"/></S.LogoImage>
            <S.Form>
            <S.FormTitleEntrar>Entrar</S.FormTitleEntrar>
            <S.FormTitleLabel >E-mail</S.FormTitleLabel>
            <S.FormInput placeholder="ex@gmail.com"/>
            <S.FormTitleLabel>Senha</S.FormTitleLabel>
            <S.FormInput placeholder="*************"/>
            <S.FormRecursos>
                <S.InputCheck type="checkbox"/>
                <S.LabelCheck>Lembrar-me</S.LabelCheck>
                <S.LabelCheck>Esqueci minha senha</S.LabelCheck>
            </S.FormRecursos>
            <S.ButtonEntrar>ENTRAR</S.ButtonEntrar>
            <S.LabelCheck>Criar conta</S.LabelCheck>
            </S.Form>
            
            </S.FormLogin>
        
           </S.Welcome>
        </div>
    )
}



export default Login;