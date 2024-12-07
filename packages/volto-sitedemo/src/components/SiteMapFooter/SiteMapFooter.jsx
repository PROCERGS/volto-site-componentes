import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { asyncConnect } from '@plone/volto/helpers';
import { defineMessages, injectIntl } from 'react-intl';
import { Container as SemanticContainer } from 'semantic-ui-react';
import { Helmet, toBackendLang } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import config from '@plone/volto/registry';

import { getNavigation } from '@plone/volto/actions';

const messages = defineMessages({
  Sitemap: {
    id: 'Sitemap',
    defaultMessage: 'Sitemap',
  },
});

export function getSitemapPath(pathname = '', lang) {
  const prefix = pathname.replace(/\/sitemap$/gm, '').replace(/^\//, '');
  const path = prefix || lang || '';
  return path;
}

/**
 * Sitemap function component.
 * @function Sitemap
 * @param {Object} props - Component properties.
 * @returns {JSX.Element} - Rendered component.
 */
function Sitemap(props) {
  const {
    location: { pathname },
    lang,
    getNavigation,
  } = props;

  useEffect(() => {
    const { settings } = config;
    const language = settings.isMultilingual ? `${toBackendLang(lang)}` : null;
    const path = getSitemapPath(pathname, language);
    getNavigation(path, 4);
  }, [pathname, lang, getNavigation]);

  const renderItems = (items) => {
    return (
      <ul className="rodape__mapa-site">
        {items.map((item) => (
          <React.Fragment key={item.title}>
            {item.items.length > 0 && (
              <li className="rodape__mapa-site__item" key={item.title}>
                <Link to={item.url} className="rodape-titulo">
                  {item.title}
                </Link>
                <ul>
                  {item.items &&
                    item.items.map((innerItem) => (
                      <li key={item.title}>
                        <Link to={innerItem.url}>{innerItem.title}</Link>
                      </li>
                    ))}
                </ul>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    );
  };

  const Container =
    config.getComponent({ name: 'Container' }).component || SemanticContainer;

  return (
    <div id="page-sitemap">
      <Helmet title={props.intl.formatMessage(messages.Sitemap)} />
      <Container className="view-wrapper">
        {props.items && renderItems(props.items, 2)}
      </Container>
    </div>
  );
}

Sitemap.propTypes = {
  getNavigation: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export const __test__ = compose(
  injectIntl,
  connect(
    (state) => ({
      items: state.navigation.items,
      lang: state.intl.locale,
    }),
    { getNavigation },
  ),
)(Sitemap);

export default compose(
  injectIntl,
  connect(
    (state) => ({
      items: state.navigation.items,
      lang: state.intl.locale,
    }),
    { getNavigation },
  ),
  asyncConnect([
    {
      key: 'navigation',
      promise: ({ location, store: { dispatch, getState } }) => {
        if (!__SERVER__) return;
        const { settings } = config;
        const path = getSitemapPath(
          location.pathname,
          settings.isMultilingual
            ? toBackendLang(getState().intl.locale)
            : null,
        );
        return dispatch(getNavigation(path, 4));
      },
    },
  ]),
)(Sitemap);
