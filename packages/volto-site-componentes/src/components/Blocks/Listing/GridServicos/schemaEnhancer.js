const schemaEnhancer = ({ schema, formData }) => {
  schema.properties = schema.properties || {};

  if (!schema.properties.query) {
    schema.properties.query = {
      title: 'Query',
      widget: 'querystring',
    };
  }

  if (!formData.query || formData.query.length === 0) {
    schema.properties.query.default = [
      {
        i: 'path',
        o: 'plone.app.querystring.operation.string.relativePath',
        v: '/servicos::1',
      },
    ];
  }

  return schema;
};

export default schemaEnhancer;
