import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Endereco = ({ content }) => {
  const {
    logradouro,
    complemento,
    cidade,
    estado,
    cep,
    numero,
    bairro,
    coordenadas,
  } = content;

  const containerStyle = { width: '100%', height: '400px' };

  let center = null;

  if (coordenadas) {
    const [lat, lng] = coordenadas
      .split(',')
      .map((coord) => parseFloat(coord.trim()));

    if (!isNaN(lat) && !isNaN(lng)) {
      center = { lat, lng };
    }
  }

  return (
    <div className="endereco-wrapper">
      {center && (
        <div>
          <LoadScript googleMapsApiKey={process.env.APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            />
          </LoadScript>
        </div>
      )}
      <div>
        {logradouro && (
          <>
            <span className="logradouro">{logradouro}</span>
            {numero && <span className="numero">, {numero}</span>}
          </>
        )}
      </div>
      <div>
        {complemento && <span className="complemento">{complemento}</span>}
      </div>
      <div>{bairro && <span className="bairro">{bairro}</span>}</div>
      <div>{cep && <span className="cep">{cep}</span>}</div>
      <div>
        {cidade && (
          <>
            <span className="cidade">{cidade}</span>
            {estado && <span className="estado"> - {estado.token}</span>}
          </>
        )}
      </div>
    </div>
  );
};

export default Endereco;
