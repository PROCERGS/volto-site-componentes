import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';
import imageBlockSVG from '@plone/volto/components/manage/Blocks/Image/block-image.svg';
import { MaybeWrap } from '@plone/volto/components';
import { UniversalLink } from '@plone/volto/components';
import cx from 'classnames';
import Endereco from '../Endereco/Endereco';
import {
  flattenToAppURL,
  messages as defaultMessages,
} from '@plone/volto/helpers';
import { getContent } from '@plone/volto/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Icon, Toast } from '@plone/volto/components';
import Contato from '../Contato/Contato';

const messages = defineMessages({
  PleaseChooseContent: {
    id: 'Escolha um Local',
    defaultMessage: 'Escolha um Local',
  },
});

const EnderecoTemplate = (props) => {
  const { block, className, data, isEditMode, style } = props;
  const intl = useIntl();
  const href = data.href?.[0];
  const link = href?.['@id'];

  const dispatch = useDispatch();
  const [local, setLocal] = useState(null);

  useEffect(() => {
    if (link) {
      const fetchData = async () => {
        try {
          const response = await dispatch(
            getContent(flattenToAppURL(link), null, `${block}-teaser`),
          );
          {
            response && setLocal(response);
          }
        } catch (error) {
          console.error('Error fetching content:', error);
        }
      };
      fetchData();
    }
  }, [dispatch, link, block]);

  return (
    <div className={cx('block teaser', className)} style={style}>
      <>
        {!href && isEditMode && (
          <Message>
            <div className="teaser-item placeholder">
              <img src={imageBlockSVG} alt="" />
              <p>{intl.formatMessage(messages.PleaseChooseContent)}</p>
            </div>
          </Message>
        )}
        {href && (
          <MaybeWrap
            condition={!isEditMode}
            as={UniversalLink}
            href={href['@id']}
          >
            <div className="teaser-item default">
              <div className="content">
                {data?.head_title && (
                  <div className="headline">{data.head_title}</div>
                )}
                {!data.hide_description && <p>{data?.description}</p>}

                {local && <Endereco content={local} />}
                {local && <Contato content={local} />}
              </div>
            </div>
          </MaybeWrap>
        )}
      </>
    </div>
  );
};

EnderecoTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
};

export default EnderecoTemplate;
