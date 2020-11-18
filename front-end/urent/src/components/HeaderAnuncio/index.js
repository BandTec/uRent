import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../service/api';
import { HiOutlineUser } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';

import * as S from './style';

import logo from '../../assets/logo.svg';

function HeaderAnuncio() {
    const history = useHistory();
    function logoff(){
        api.post(`/usuarios/logoff`, {
			
		})
			.then(response => {
				sessionStorage.setItem("id", response.data.id);
				history.push('/');
			})
			.catch(error => {
				console.log(error)
				alert('Erro');
			})
    }
    return (
        <S.Header>

            <S.HeaderLogo>
                <img src={logo} alt="Logo uRent" />
            </S.HeaderLogo>

            <S.HeaderNav>
                <Link to="/cadastro">
                    <S.ButtonLight>Anuncie</S.ButtonLight>
                </Link>
                <S.ButtonBlue onClick={logoff}>Sair</S.ButtonBlue>
                <S.ButtonMenu>
                    <HiOutlineUser size="25" color="#0752DE" />
                    <GiHamburgerMenu size="25" color="#0752DE" />
                </S.ButtonMenu>
            </S.HeaderNav>

        </S.Header>
    )
}

export default HeaderAnuncio;