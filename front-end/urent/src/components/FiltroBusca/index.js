import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { TiArrowSortedDown } from 'react-icons/ti';

import * as S from './style';
function FiltroBusca() {

	const [open, setOpen] = useState(false);

	return (
		<div>
			<S.Fitlro>
				<S.FiltroSection style={{ borderRight: '2px solid #CCCCCC' }}>
					<S.FiltroSectionTitle>Localização</S.FiltroSectionTitle>
					<S.FiltroSectionText>Perto de você <TiArrowSortedDown onClick={() => { open ? setOpen(false) : setOpen(true) }} /></S.FiltroSectionText>
				</S.FiltroSection>

				<S.FiltroSection style={{ borderRight: '2px solid #CCCCCC' }}>
					<S.FiltroSectionTitle>Garagem</S.FiltroSectionTitle>
					<S.FiltroSectionText>Selecione o tipo <TiArrowSortedDown onClick={() => { open ? setOpen(false) : setOpen(true) }} /></S.FiltroSectionText>
				</S.FiltroSection>

				<S.FiltroSection>
					<S.FiltroSectionTitle>Dias</S.FiltroSectionTitle>
					<S.FiltroSectionText>Selecione os dias <TiArrowSortedDown onClick={() => { open ? setOpen(false) : setOpen(true) }} /></S.FiltroSectionText>
				</S.FiltroSection>


			</S.Fitlro>

			{
				open && <Teste></Teste>
			}

		</div>
	)
}

function Teste() {
	return (
		<S.FiltroOpen>

			<S.FiltroSection>

				<div>
					<S.FiltroLabelOpen>Estado</S.FiltroLabelOpen>
					<S.FilterInputOpen />
				</div>

				<div>
					<S.FiltroLabelOpen>Cidade</S.FiltroLabelOpen>
					<S.FilterInputOpen />
				</div>
				
				<div>
					<S.FiltroLabelOpen>Bairro</S.FiltroLabelOpen>
					<S.FilterInputOpen />
				</div>

			</S.FiltroSection>

			<S.FiltroSection>

					<S.FilterTipoVeiculo style={{ backgroundColor: '#F1F1F1' }}>Moto (Pequena)</S.FilterTipoVeiculo>
					<S.FilterTipoVeiculo>Carro (Média)</S.FilterTipoVeiculo>
					<S.FilterTipoVeiculo style={{ backgroundColor: '#F1F1F1' }}>Carro (Grande)</S.FilterTipoVeiculo>
					<S.FilterTipoVeiculo>Caminhão (Extra Grande)</S.FilterTipoVeiculo>

			</S.FiltroSection>

			<S.FiltroSection>

				<Calendar />

			</S.FiltroSection>

		</S.FiltroOpen>
	);
}

export default FiltroBusca;