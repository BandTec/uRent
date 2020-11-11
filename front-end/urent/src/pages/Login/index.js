import React, { useState } from 'react';
import { FaRegUser, FaKey } from 'react-icons/fa';

import { Link, useHistory } from 'react-router-dom';

import api from '../../service/api';

import logo from '../../assets/logoLogin.svg';
import * as S from '../Login/style';

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const history = useHistory();

    function login() {
        api.post(`/usuarios/login`, {
            "email": email,
            "senha": senha
        })
            .then(response => {
                sessionStorage.setItem("id", response.data.id);
                alert("Logado!")
                history.push('/feed');
            })
            .catch(error => {
                console.log(error)
                alert('Erro');
            })
    }

    return (
        <div>
            <S.Welcome>

                <S.FormLogin>

                    <S.LogoImage><img src={logo} alt="Logo uRent" height="100%" /></S.LogoImage>
                    <S.Form>
                        <S.FormTitleEntrar>Entrar</S.FormTitleEntrar>

                        <S.FormTitleLabel >E-mail</S.FormTitleLabel>
                        <S.FormData>
                            <FaRegUser style={{ position: 'absolute', left: '3%' }} size='25' color='#FFFFFF' />
                            <S.FormInput placeholder="ex@gmail.com" placeholderTextColor='red' onChange={e => setEmail(e.target.value)} />
                        </S.FormData>

                        <S.FormTitleLabel>Senha</S.FormTitleLabel>
                        <S.FormData>
                            <FaKey style={{ position: 'absolute', left: '3%' }} size='25' color='#FFFFFF' />
                            <S.FormInput placeholder="*************" onChange={e => setSenha(e.target.value)} />
                        </S.FormData>

                        <S.FormRecursos>
                            <S.FormRecusosCheck style={{ display: 'flex', alignItems: 'center' }}>
                                <input type="checkbox" type="checkbox" />
                                <S.LabelCheck>Lembrar-me</S.LabelCheck>
                            </S.FormRecusosCheck>

                            <Link to="/reset-senha">
                                <S.LabelCheck>Esqueci minha senha</S.LabelCheck>
                            </Link>

                        </S.FormRecursos>

                        <S.ButtonEntrar onClick={login}>ENTRAR</S.ButtonEntrar>
                        <S.LabelCheck>Criar conta</S.LabelCheck>

                    </S.Form>

                </S.FormLogin>

            </S.Welcome>
        </div>
    )
}



export default Login;