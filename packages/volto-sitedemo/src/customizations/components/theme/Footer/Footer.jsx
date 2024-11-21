import React, { div, useEffect, useState } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import LogoProcergs from '../../../../components/LogoProcergs/LogoProcergs';
import SeloGoverno from '../../../../components/SeloGoverno/SeloGoverno';
import Endereco from '../../../../components/Endereco/Endereco';
import Contato from '../../../../components/Contato/Contato';
import SitemapComponent from '../../../../components/SitemapComponent/SitemapComponent';
import SecretariaNome from '../../../../components/SecretariaNome/SecretariaNome';
import SiteMapFooter, {
  default as Sitemap,
} from '../../../../components/SiteMapFooter/SiteMapFooter';
import RedesSociais from '../../../../components/RedesSociais/RedesSociais';

const Footer = ({ intl }) => {
  const navRoot = useSelector((state) => state.navroot?.data?.navroot);

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
