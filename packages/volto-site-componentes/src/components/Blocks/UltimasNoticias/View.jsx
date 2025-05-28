import { withBlockExtensions } from '@plone/volto/helpers';
import UltimasNoticiasView from './DefaultView';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listUltimas } from '../../../actions/ultimas/ultimas';

const UltimasBlock = (props) => {
  const { data, isEditMode } = props;
  const dispatch = useDispatch();
  const items = useSelector((state) => state.ultimas?.data);
  // Dispara chamada na criação da constante dispatch

  console.log('UltimasBlock props:', data);

  useEffect(() => {
    dispatch(listUltimas(data?.options));
  }, [dispatch]);

  console.log('UltimasBlock items:', items);

  return (
    <UltimasNoticiasView {...data} isEditMode={isEditMode} items={items} />
  );
};

export default withBlockExtensions(UltimasBlock);
