import React, { useEffect, useState } from 'react';
import {useHistory, Link} from 'react-router-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import api from '../../service/api';

import HeaderAnuncio from '../../components/HeaderAnuncio/index';
import FiltroBusca from '../../components/FiltroBusca/index';
import Footer from '../../components/Footer';

import './style.css';

import * as S from './style';

function Alugar() {

  const [initialPosition, setInitialPosition] = useState([0, 0]);
  const [enderecos, setEnderecos] = useState([]);

  const history = useHistory();

  useEffect(() => {

    api.get(`usuarios/status`)
			.catch(() => {
				history.push('/login')
			})

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude])
    });

    api.get('/anuncios/latitude-longitude')
      .then(response => {
        setEnderecos(response.data)
      })
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

            {
              enderecos.map(endereco =>
                <Marker position={[endereco.latitude, endereco.longitude]}>
                  <Popup>
                    R${endereco.valorDiaria}
                    <Link onClick={() => {sessionStorage.setItem('anuncio', endereco.id); history.push('/detalhes-anuncio');}}>
                      <p>Ver</p>
                    </Link>
                  </Popup>
                </Marker>
              )}
          </Map>
        </div>
      </S.Section>

      <Footer />

    </div>

  );
}

export default Alugar;