import React, { useEffect, useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';

import HeaderAnuncio from '../../components/HeaderAnuncio/index';
import FiltroBusca from '../../components/FiltroBusca/index';
import Footer from '../../components/Footer';

import './style.css';

import * as S from './style';


function Alugar() {

  const [initialPosition, setInitialPosition] = useState([0, 0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude])
    });
  }, [])


  return (
    <div>
      <HeaderAnuncio />
      <FiltroBusca />

      <S.Section>
        <S.SectionTitle>Garagens próximas a você</S.SectionTitle>

        <div className="leaflet-container">
          <Map center={initialPosition} zoom={25} >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </Map>
        </div>
      </S.Section>

      <Footer />

    </div>

  );
}

export default Alugar;