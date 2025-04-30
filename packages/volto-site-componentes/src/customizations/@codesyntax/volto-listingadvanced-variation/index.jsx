import AdvancedListingBlockTemplate from './AdvancedListingBlockTemplate';
 
 const applyConfig = (config) => {
   config.blocks.blocksConfig.listing.variations = [
     ...config.blocks.blocksConfig.listing.variations,
     {
       id: 'advanced',
       title: 'Advanced',
       template: AdvancedListingBlockTemplate,
       schemaEnhancer: ({ schema, FormData, intl }) => {
         schema.properties.href.selectedItemAttrs.push('Subject');
         return schema;
       },
     },
   ];
 
   return config;
 };
 
 export default applyConfig;