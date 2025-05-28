// src/components/Blocks/Gallery/Edit.jsx
import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal, BlockDataForm } from '@plone/volto/components';
import UltimasBlock from './View';
import { ultimasSchema } from './schema'; // updated import

//import { useIntl } from 'react-intl';

const UltimasNoticiasEdit = (props) => {
  const { data, onChangeBlock, selected } = props;
  //const intl = useIntl();
  const schema = ultimasSchema({ ...props });

  return (
    <>
      <UltimasBlock {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          formData={data}
          onChangeField={(id, value) => {
            onChangeBlock(props.block, {
              ...data,
              [id]: value,
            });
          }}
          onChangeBlock={onChangeBlock}
          block={props.block}
          blocksConfig={props.blocksConfig}
          navRoot={props.navRoot}
          contentType={props.contentType}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(UltimasNoticiasEdit);
