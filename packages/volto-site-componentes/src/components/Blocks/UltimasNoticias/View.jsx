import { withBlockExtensions } from '@plone/volto/helpers';
import UltimasNoticiasView from './DefaultView';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listUltimas } from '../../../actions/ultimas/ultimas';

const UltimasBlock = (props) => {
  const { data, isEditMode } = props;
  const dispatch = useDispatch();
  const items = useSelector((state) => state.ultimas?.data);

  useEffect(() => {
    dispatch(listUltimas(data?.options));
  }, [dispatch, data?.options]);

  return (
    <UltimasNoticiasView {...data} isEditMode={isEditMode} items={items} />
  );
};

export default withBlockExtensions(UltimasBlock);
