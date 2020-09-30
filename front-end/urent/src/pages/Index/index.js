import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';

import * as S from './style';

import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';

function Index() {
	return (
		<div>
			<Header />

			<S.Carroussel>
				<Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} interval="3000" transitionTime="150">
					
					<div>
						<S.SlideContent>
							<S.SlideContentTitle>
								Descubra garagens próximas à você.
							</S.SlideContentTitle>
							<S.SlideContentText>
								Através da sua localização atual, apresentamos as oportunidades mais proximas à você.
							</S.SlideContentText>
						</S.SlideContent>
						<img src={slide1} alt="Slide 1" />
					</div>

					<div>
						<img src={slide2} alt="Slide 2" />
						<S.SlideContent>
							<S.SlideContentTitle>
							Estacione na sua viagem.
							</S.SlideContentTitle>
							<S.SlideContentText>
								Agende onde irá estacionar durante sua viagem de carro, de maneira simples.
							</S.SlideContentText>
						</S.SlideContent>
					</div>

					<div>
						<img src={slide3} alt="Slide 3" />
						<S.SlideContent>
							<S.SlideContentTitle>
							Estacione durante o trabalho.
							</S.SlideContentTitle>
							<S.SlideContentText>
								Adquira rapidez e comodidade, agendando onde estacionará seu carro durante o expediente.
							</S.SlideContentText>
						</S.SlideContent>
					</div>

				</Carousel>
			</S.Carroussel>

			<S.Welcome>

				<S.WelcomeContentText>
					<S.WelcomeTextFirst>Seja bem-vindo!</S.WelcomeTextFirst>
					<S.WelcomeTextSecond>O que deseja fazer?</S.WelcomeTextSecond>
				</S.WelcomeContentText>

				<S.WelcomeContentButton>
					<S.WelcomeButton>Alugar garagem</S.WelcomeButton>
					<S.WelcomeButton>Anunciar garagem</S.WelcomeButton>	
				</S.WelcomeContentButton>

			</S.Welcome>

			<Footer />
		</div>
	)
}

export default Index;