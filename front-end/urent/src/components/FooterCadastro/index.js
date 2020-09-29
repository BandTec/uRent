import React from 'react';
import { FiAlertOctagon } from 'react-icons/fi';

import * as S from './style';

function FooterCadastro() {
    return (
        <S.Footer>
            <S.FooterAlert>
                <FiAlertOctagon color="#8257E5" size="35" style={{ alignSelf: 'flex-start' }} />
                <S.FooterText>Importante! Preencha todos os dados</S.FooterText>
            </S.FooterAlert>
            <S.FooterButton>Salvar Cadastro</S.FooterButton>
        </S.Footer>
    )
}

export default FooterCadastro;