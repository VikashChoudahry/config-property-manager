const configSchema = {
  source: { type: 'object' },
  requiredProperties: { type: 'array' },
  required: [ 'source', 'requiredProperties' ],
};

module.exports = { configSchema };
