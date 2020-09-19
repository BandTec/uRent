import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';

import './style.css'

import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';

function Index() {
	return (
		<div>
			<Header />
			<div className="carroussel">
				<Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} interval="3000" transitionTime="150">
					<div>
						<div className="slide-content">
							<h1 className="slide-content-title ">
								Descubra garagens próximas à você.
							</h1>
							<p className="slide-content-text">
								Através da sua localização atual, apresentamos as oportunidades mais proximas à você.
							</p>
						</div>
						<img src={slide1} alt="Slide 1" />
					</div>
					<div>
						<img src={slide2} alt="Slide 2" />
						<div className="slide-content">
							<h1 className="slide-content-title ">
							Estacione na sua viagem.
							</h1>
							<p className="slide-content-text">
							Agende onde irá estacionar durante sua viagem de carro, de maneira simples.
							</p>
						</div>
					</div>
					<div>
						<img src={slide3} alt="Slide 3" />
						<div className="slide-content">
							<h1 className="slide-content-title ">
							Estacione durante o trabalho.
							</h1>
							<p className="slide-content-text">
							Adquira rapidez e comodidade, agendando onde estacionará seu carro durante o expediente.
							</p>
						</div>
					</div>
				</Carousel>
			</div>
			<div className="welcome">
				<div className="welcome-content-text">
					<p className="welcome-text-first">Seja bem-vindo!</p>
					<p className="welcome-text-second">O que deseja fazer?</p>
				</div>
				<div className="welcome-content-button">
					<button className="welcome-button">Alugar garagem</button>
					<button className="welcome-button">Anunciar garagem</button>	
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Index;