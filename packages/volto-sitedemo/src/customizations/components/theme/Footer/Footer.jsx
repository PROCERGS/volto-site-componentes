import React from 'react';
import { injectIntl } from 'react-intl';
import SeloGoverno from '../../../../components/SeloGoverno/SeloGoverno';
import SiteMapFooter from '../../../../components/SiteMapFooter/SiteMapFooter';
import RedesSociais from '../../../../components/RedesSociais/RedesSociais';

const Footer = ({ intl }) => {
  return (
    <div id="footer" stackable vertical padded inverted color="grey">
      <div className="footer-container">
        <div className="footer-site-nome">
          <SeloGoverno />
        </div>
        <SiteMapFooter location="/" />
        <RedesSociais />
      </div>
      <div className="footer-logo">
        <p>
          Todo o conteúdo deste site está publicado sob a licença Creative
          Commons Atribuição-SemDerivações 3.0 Não Adaptada
        </p>
      </div>
    </div>
  );
};

export default injectIntl(Footer);
