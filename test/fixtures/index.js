const { PropertyManagerFromENV  } = require('../../index');

module.exports = {
  configSchema: {
    source: PropertyManagerFromENV,
    requiredProperties: [ "ENVIRONMENT" ]
  },
  missingConfigSchema: {
    source: ''
  },
  invalidInput: 'Invalid Config!',
  configPropertyMismatchErrorMsg: 'Config property mismatch!',
  failureResponse: ''
};