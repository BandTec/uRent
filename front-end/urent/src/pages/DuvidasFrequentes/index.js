import React from 'react';

import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import HeaderDuvidas from '../../components/HeaderDuvidasFrequentes/index';

import * as S from '../DuvidasFrequentes/style';

function Duvidas() {
    return (
        <div>
            <Header />

            <HeaderDuvidas />

            <S.Welcome>


            </S.Welcome>

            <Footer />
        </div>
    )
}

export default Duvidas;