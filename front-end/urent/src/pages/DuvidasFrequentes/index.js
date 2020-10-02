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

            <div>

                <S.Welcome>

                    <S.FormPerguntas>
                        <S.FormTitle>Como cancelo um anuncio?</S.FormTitle>
                        <S.FormTitle>Reservei uma garagem chegando lá estava ocupada , o que faço?</S.FormTitle>
                        <S.FormTitle>O pagamento e feito pelo site ou pessoalmente?</S.FormTitle>
                        <S.FormTitle>O que é a Urent e como funciona?</S.FormTitle>
                        <S.FormTitle>Como faço pra efetuar uma reserva?</S.FormTitle>
                        <S.FormTitle>Como anunciar uma garagem?</S.FormTitle>
                        <S.FormTitle>Como altero meu endereço?</S.FormTitle>


                    </S.FormPerguntas>

                </S.Welcome>

            </div>


            <Footer />
        </div>
    )
}

export default Duvidas;