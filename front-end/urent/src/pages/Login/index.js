import React from 'react';

import logo from '../../assets/logoLogin.svg';
import * as S from '../Login/style';

function Login(){
    return (
        <div>
           <S.Welcome>
           
           <S.FormLogin>

            <S.FormImage><img src={logo} alt="Logo uRent" /></S.FormImage>
            <S.FormTitleEntrar>Entrar</S.FormTitleEntrar>
            <S.ButtonEntrar>Entrar</S.ButtonEntrar>
            </S.FormLogin>
        
           </S.Welcome>
        </div>
    )
}



export default Login;