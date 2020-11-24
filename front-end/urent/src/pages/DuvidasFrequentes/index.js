import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';

import * as S from '../DuvidasFrequentes/style';

function Duvidas() {

    const [pagamento, setPagamento] = useState(false);
    const [funciona, setFunciona] = useState(false);
    const [reserva, setReserva] = useState(false);
    const [anuncio, setAnuncio] = useState(false);


    return (
        <div>
            <Header />

            <S.Header>
				<S.HeaderNav>
					<Link to="/"><FiArrowLeft color="#fff" size="30" /></Link>
				</S.HeaderNav>
				<S.HeaderTitle>
					<h1 style={{ fontSize: '20px', color: '#fff', fontWeight: 'bold', }}>Duvidas Frequentes</h1>
				</S.HeaderTitle>
			</S.Header>

            <div>

                <S.Welcome>

                    <S.FormPerguntas>
                        <S.FormTitle onClick={() => setPagamento(!pagamento)}>O pagamento e feito pelo site ou pessoalmente?</S.FormTitle>
                        { pagamento && (
                            <S.FormTitle>O pagamento é feito após a confirmação do aluguel, podendo ser por cartão ou por boleto bancário</S.FormTitle>
                        )}
                        <S.FormTitle onClick={() => setFunciona(!funciona)}>O que é a uRent e como funciona?</S.FormTitle>
                        { funciona && (
                            <S.FormTitle>A uRent é uma startup de aluguel de garagens, fazemos a intermediação entre as pessoas com garagens ociosas e pessoas que necessitam de algum local para guardar seu veículo</S.FormTitle>
                        )}
                        <S.FormTitle onClick={() => setReserva(!reserva)}>Como faço pra efetuar uma reserva?</S.FormTitle>
                        { reserva && (
                            <S.FormTitle>Acesse nosso site, escolha a garagem que mais se encaixa com suas necessidades e confirme o aluguel</S.FormTitle>
                        )}
                        <S.FormTitle onClick={() => setAnuncio(!anuncio)}>Como anunciar uma garagem?</S.FormTitle>
                        { anuncio && (
                            <S.FormTitle>Para anunciar uma garagem é necessário ter uma conta e então acessar seu perfil e acessar a página de cadastro de garagem</S.FormTitle>
                        )}
                    </S.FormPerguntas>

                </S.Welcome>

            </div>


            <Footer />
        </div>
    )
}

export default Duvidas;