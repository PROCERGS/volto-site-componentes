import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

const Endereco = ({ content }) => {
  const {
    title,
    logradouro,
    complemento,
    municipio,
    estado,
    pais,
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
        {title && (
          <div className="titulo-wrapper-endereco">
            <FontAwesomeIcon icon={faLocationPin} />
            <span className="titulo-endereco">{title}</span>
          </div>
        )}
      </div>
      <div>
        {logradouro && (
          <>
            <span className="logradouro-endereco">{logradouro}</span>
            {numero && <span className="numero-endereco">, {numero}</span>}
            {bairro && <span className="bairro-endereco">- {bairro}</span>}
          </>
        )}
      </div>
      <div>
        {complemento && (
          <span className="complemento-endereco">{complemento}</span>
        )}
      </div>
      <div>
        {municipio && (
          <>
            <span className="municipio-endereco">{municipio}</span>
            {estado && (
              <span className="estado-endereco"> - {estado.token}</span>
            )}
            {pais && <span className="pais-endereco"> - {pais}</span>}
          </>
        )}
      </div>
      <div>{cep && <span className="cep-endereco">{cep}</span>}</div>
    </div>
  );
};

export default Endereco;
