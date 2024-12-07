// SemanticUI-free pre-@plone/components
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import MobileNavigation from '@kitconcept/volto-light-theme/components/MobileNavigation/MobileNavigation';
import { useIntl, defineMessages } from 'react-intl';
import config from '@plone/volto/registry';
import cx from 'classnames';
import IntranetSearchWidget from '@kitconcept/volto-light-theme/components//SearchWidget/IntranetSearchWidget';
import SimboloRS from '../../../../components/SimboloRS/SimboloRS';
import { SearchBar } from '../../../../components/SearchBar/SearchBar';

import {
  Anontools,
  LanguageSelector,
  Navigation,
  UniversalLink,
} from '@plone/volto/components';
import BarraEstado from '../../../../components/BarraEstado/BarraEstado';
import BarraAcessibilidade from '../../../../components/BarraAcessibilidade/BarraAcessibilidade';
import SecretariaNome from '../../../../components/SecretariaNome/SecretariaNome';

const messages = defineMessages({
  siteLabel: {
    id: 'siteLabel',
    defaultMessage: ' ',
  },
});

const InternetHeader = ({
  pathname,
  siteLabel,
  token,
  siteAction,
  siteTitle,
}) => {
  const navRoot = useSelector((state) => state.navroot?.data?.navroot);
  const nome_sec = navRoot?.nome_secretaria_vinculada;
  const url_sec = navRoot?.url_secretaria_vinculada;

  return (
    <>
      <div className="header">
        <div className="tools-wrapper">
          <SecretariaNome content={nome_sec} url={url_sec} />
          <LanguageSelector />
          <div className="tools">
            {!token && <Anontools />}
            {siteAction &&
              siteAction.map((item) => (
                <UniversalLink key={item.url} href={item.url}>
                  {item.title}
                </UniversalLink>
              ))}
          </div>
          {siteLabel && (
            <div className="intranet">
              <p>{siteLabel}</p>
            </div>
          )}
        </div>
        <div className="logo-nav-wrapper">
          <div className="simbolo">
            <SimboloRS />
            <div className="header-titulo">{siteTitle}</div>
          </div>
          <Navigation pathname={pathname} />
          <MobileNavigation pathname={pathname} />
          <div className="search-wrapper navigation-desktop">
            <div className="search">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const IntranetHeader = ({
  pathname,
  siteLabel,
  token,
  siteAction,
  siteTitle,
}) => {
  return (
    <>
      <div className="header">
        <div className="tools-wrapper">
          <LanguageSelector />
          <div className="tools">
            {!token && <Anontools />}
            {siteAction &&
              siteAction.map((item) => (
                <UniversalLink key={item.url} href={item.url}>
                  {item.title}
                </UniversalLink>
              ))}
          </div>
          {siteLabel && (
            <div className="intranet">
              <p>{siteLabel}</p>
            </div>
          )}
        </div>
        <div className="logo-nav-wrapper">
          <div className="simbolo">
            <SimboloRS />
            {siteTitle}
          </div>
          <div className="search-wrapper">
            <div className="search">
              <IntranetSearchWidget />
            </div>
          </div>
          <Navigation pathname={pathname} />
          <MobileNavigation pathname={pathname} />
        </div>
      </div>
    </>
  );
};

const Header = (props) => {
  const { pathname } = props;
  let siteLabel = config.settings.siteLabel;
  const intranetHeader = config.settings.intranetHeader;
  const token = useSelector((state) => state.userSession.token);
  const siteAction = useSelector(
    (state) => state.content.data?.['@components']?.actions?.site_actions,
  );
  const intl = useIntl();
  const translatedSiteLabel = intl.formatMessage(messages.siteLabel);
  const site = useSelector((state) => state.site.data);

  const siteTitle = site['plone.site_title'];

  siteLabel =
    siteLabel &&
    (translatedSiteLabel !== 'siteLabel' && translatedSiteLabel !== ' '
      ? translatedSiteLabel
      : siteLabel);

  return (
    <header
      className={cx('header-wrapper', { 'intranet-header': intranetHeader })}
    >
      <BarraEstado />
      <BarraAcessibilidade />
      <Container layout>
        {intranetHeader ? (
          <IntranetHeader
            pathname={pathname}
            siteLabel={siteLabel}
            token={token}
            siteAction={siteAction}
            siteTitle={siteTitle}
          />
        ) : (
          <InternetHeader
            pathname={pathname}
            siteLabel={siteLabel}
            token={token}
            siteAction={siteAction}
            siteTitle={siteTitle}
          />
        )}
      </Container>
    </header>
  );
};

Header.propTypes = {
  token: PropTypes.string,
  pathname: PropTypes.string.isRequired,
};

Header.defaultProps = {
  token: null,
};

export default Header;
