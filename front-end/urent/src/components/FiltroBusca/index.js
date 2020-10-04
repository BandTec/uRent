import React from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';

import * as S from './style';

function FiltroBusca() {
    return (
        <S.Fitlro>

            <S.FiltroSection style={{ borderRight: '2px solid #CCCCCC'}}>
                <S.FiltroSectionTitle>Localização</S.FiltroSectionTitle>
                <S.FiltroSectionText>Perto de você <TiArrowSortedDown /></S.FiltroSectionText>
            </S.FiltroSection>

            <S.FiltroSection style={{ borderRight: '2px solid #CCCCCC'}}>
                <S.FiltroSectionTitle>Garagem</S.FiltroSectionTitle>
                <S.FiltroSectionText>Selecione o tipo <TiArrowSortedDown /></S.FiltroSectionText>
            </S.FiltroSection>

            <S.FiltroSection>
                <S.FiltroSectionTitle>Dias</S.FiltroSectionTitle>
                <S.FiltroSectionText>Selecione os dias <TiArrowSortedDown /></S.FiltroSectionText>
            </S.FiltroSection>
            
        </S.Fitlro>
    )
}

export default FiltroBusca;