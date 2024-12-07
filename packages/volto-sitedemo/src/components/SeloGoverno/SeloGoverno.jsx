import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import LogoRS from './rslogo.svg';

const SeloGoverno = () => {
  return (
    <div className="footer-selo-governo">
      <UniversalLink href="https://www.estado.rs.gov.br" target="_self">
        <img
          src={LogoRS}
          alt="RS.GOV - Novas façanhas"
          className="selo-governo--padrao"
        />
      </UniversalLink>
    </div>
  );
};

export default SeloGoverno;
