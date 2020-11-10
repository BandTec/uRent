import React, { useState,useEffect } from 'react';
import { FaRegUser, FaKey } from 'react-icons/fa';

import { Link, useHistory } from 'react-router-dom';

import api from '../../service/api';

import logo from '../../assets/logo-reset.svg';
import * as S from '../Login/style';

function ResetSenha() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [novaSenha, setNovaSenha] = useState("");

    const history = useHistory();

    function alterarSenha() {
        api.post(`/usuarios/login`, {
            "email": email,
            "senha": senha,
            "novaSenha": novaSenha
        })
        .then(response => {
            sessionStorage.setItem("id", response.data.id);
            // sessionStorage.getItem("id");
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
                        <S.FormTitleEntrar>Esqueceu a senha?</S.FormTitleEntrar>
                        <S.FormTitleLabel2>Insira o endereço de email associado à sua conta, e digite uma nova senha.</S.FormTitleLabel2>
                        <S.FormData>
                            <FaRegUser style={{position: 'absolute', left: '3%'}} size='25' color='#FFFFFF' />
                            <S.FormInput placeholder="Email" placeholderTextColor='red' onChange={e => setEmail(e.target.value)} />
                        </S.FormData>
                        <S.FormData>
                            <FaKey style={{position: 'absolute', left: '3%'}} size='25' color='#FFFFFF' />
                            <S.FormInput placeholder="Nova senha" placeholderTextColor='red' onChange={e => setSenha(e.target.value)}  />
                        </S.FormData>
                        <S.FormData>
                            <FaKey style={{position: 'absolute', left: '3%'}} size='25' color='#FFFFFF' />
                            <S.FormInput placeholder="Confirme nova senha" placeholderTextColor='red'onChange={e => setNovaSenha(e.target.value)}  />
                        </S.FormData>
                        
                        <S.ButtonEntrar onClick={alterarSenha}>Atualizar senha</S.ButtonEntrar>
                    </S.Form>
                    
                </S.FormLogin>
                
            </S.Welcome>
        </div>
    )
}


export default ResetSenha;