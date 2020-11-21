import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../service/api';
import { HiOutlineUser } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';

import * as S from './style';

import logo from '../../assets/logo.svg';

function HeaderAnuncio(cadastro) {

  const [open, setOpen] = useState(false);

  const history = useHistory();
  function logoff() {
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
        <Link to={cadastro.cadastro}>
          <S.ButtonLight>Anuncie</S.ButtonLight>
        </Link>
        <S.ButtonBlue onClick={logoff}>Sair</S.ButtonBlue>
        <S.ButtonMenu onClick={() => setOpen(!open)}>
          <HiOutlineUser size="25" color="#0752DE" />
          <GiHamburgerMenu size="25" color="#0752DE" />
        </S.ButtonMenu>

        <div style={{ position: 'absolute', right: '2vw', top: '9vh' }}>
          {
            open && (
              <Menu />
            )
          }
        </div>
      </S.HeaderNav>

    </S.Header>
  )
}

export default HeaderAnuncio;

function Menu() {
  return (
    <div style={{ height: '100px', width: '200px', padding: '1%', backgroundColor: '#fff', border: '1px solid #0752DE', borderRadius: '15px' }}>
      <Link style={{ textDecoration: 'none' }} to="/perfil">
        <div style={{ width: '95%', height: '28%', margin: '0 auto 3px auto', border: '1px solid #C4C4C4', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#0752DE' }}>
          Perfil
      </div>
      </Link>

      <Link style={{ textDecoration: 'none' }} to="/meus-anuncios">
        <div style={{ width: '95%', height: '28%', margin: '0 auto 5px auto', border: '1px solid #C4C4C4', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#0752DE' }}>
          Meus Anúncios
      </div>
      </Link>

      <Link style={{ textDecoration: 'none' }} to="/chat">
        <div style={{ width: '95%', height: '28%', margin: '0 auto', border: '1px solid #C4C4C4', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#0752DE' }}>
          Chat
      </div>
      </Link>
    </div>

  )
}