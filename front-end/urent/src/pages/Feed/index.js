import React from 'react';
import { IoIosStar } from 'react-icons/io';

import HeaderAnuncio from '../../components/HeaderAnuncio/index';
import FiltroBusca from '../../components/FiltroBusca/index';
import Footer from '../../components/Footer';

import foto from '../../assets/garagemExemplo.png';

import * as S from './style';

function Feed() {

	return (
		<div>
			<HeaderAnuncio />
			<FiltroBusca />

			<S.FeedContainer>

				<S.FeedTitle>Garagem disponível para aluguel diário</S.FeedTitle>
				<S.FeedSection>

					<div>
						<img src={foto} height="250px" alt="Foto do anúncio" />
						<S.FeedSection>
							<label style={{fontWeight: '500'}}>6.0</label>
							<div>
								<IoIosStar size="20" color="#FDF53B" />
								<IoIosStar size="20" color="#FDF53B" />
								<IoIosStar size="20" color="#FDF53B" />
								<IoIosStar size="20" color="#C4C4C4" />
								<IoIosStar size="20" color="#C4C4C4" />
							</div>
						</S.FeedSection>
					</div>
					<S.FeedContent>

						<S.FeedContentTitle>Localização</S.FeedContentTitle>

						<S.FeedContentSection>
						
							<S.SectionTitle>Endereço: <S.SectionData>Endereço do anúncio</S.SectionData></S.SectionTitle>
							<S.SectionTitle>Nº: <S.SectionData>234</S.SectionData></S.SectionTitle> <S.SectionTitle>CEP: <S.SectionData>45896125-648</S.SectionData></S.SectionTitle>
							<S.SectionTitle>Cidade: <S.SectionData>São Paulo</S.SectionData></S.SectionTitle>
						
						</S.FeedContentSection>
						<S.SectionTitle>Tipo de Garagem: <S.SectionData>Carros</S.SectionData></S.SectionTitle>
						<S.SectionPreco style={{alignSelf: 'center'}}>Preço diário: <S.SectionData>R$15,00</S.SectionData></S.SectionPreco>
						
					</S.FeedContent>
				
				</S.FeedSection>

			</S.FeedContainer>

			<Footer />

		</div>
	);
}

export default Feed;