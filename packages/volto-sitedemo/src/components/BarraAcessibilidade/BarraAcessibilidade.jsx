import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faSitemap,
  faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BarraAcessibilidade = () => {
  return (
    <div className="acess-wrapper">
      <div className="acess-right">
        <ul className="acess-ul">
          <li>
            <a title="Ir para o conteúdo" href="#conteudoInicio">
              Conteúdo [1]
            </a>{' '}
          </li>
          <li>
            <a title="Ir para o menu" href="#menuInicio">
              Menu [2]
            </a>{' '}
          </li>
          <li>
            <a title="Ir para a busca" href="#buscageralTextBox">
              Busca [3]
            </a>{' '}
          </li>
          <li>
            <a href="/acessibilidade">
              <FontAwesomeIcon icon={faUniversalAccess} /> Acessibilidade
            </a>
          </li>
        </ul>
      </div>
      <div className="acess-left">
        <ul className="acess-ul">
          <li>
            <a href="/contact-form">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li>
            <Link to="/sitemap">
              <FontAwesomeIcon icon={faSitemap} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BarraAcessibilidade;
