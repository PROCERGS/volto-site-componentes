import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import LogoImage from './logo_Procergs.png';
import { UniversalLink } from '@plone/volto/components';

const LogoProcergs = () => {
  return (
    <div className="footer-barra-procergs">
      <UniversalLink to="http://www.procergs.rs.gov.br/">
        <Image src={LogoImage} alt="Visite o site da PROCERGS" />
      </UniversalLink>

      <Link id="termos-de-uso" to="/termos-de-uso">
        Termos de Uso
      </Link>
    </div>
  );
};

export default LogoProcergs;
