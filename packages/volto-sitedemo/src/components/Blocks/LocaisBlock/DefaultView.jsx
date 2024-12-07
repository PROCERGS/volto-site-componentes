import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import Endereco from '../../Endereco/Endereco';

const LocalSummary = ({ content }) => {
  return (
    <Container className={`Local summary`}>
      <h4>
        <UniversalLink item={content}>{content.title}</UniversalLink>
      </h4>
      <Endereco content={content} />
    </Container>
  );
};

const LocaisView = (props) => {
  const { locais, headline, className } = props;
  return (
    <Container narrow className={`block locais ${className}`}>
      <h3>{headline}</h3>
      <Container className={`locais listing`}>
        {locais &&
          locais.length > 0 &&
          locais.map(function (Local, i) {
            return <LocalSummary content={Local} key={i} />;
          })}
      </Container>
    </Container>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
LocaisView.propTypes = {
  headline: PropTypes.string,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
LocaisView.defaultProps = {
  headline: 'Locais',
};

export default LocaisView;
