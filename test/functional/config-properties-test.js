const dotenv = require('dotenv');
if (!process.env.ALREADY_SET) {
  dotenv.config();
}

const expect = require('chai').expect,
  nock = require('nock');

const { PropertyManager } = require('../../index'),
  fixtures = require('../fixtures');

describe('Property Manager Validation', () => {
  it('should fail if required configurations are missing to get the required env variables.', (done) => {
    try {
      PropertyManager.config(fixtures.configSchema);
      PropertyManager.init();
      done();
    } catch (error) {
      expect(error.message).to.be.eqls(fixtures.configPropertyMismatchErrorMsg);
      done();
    }
  });

  it('should fail if required config propertie value is not set.', (done) => {
    try {
      PropertyManager.config(fixtures.missingConfigSchema);
      PropertyManager.init();
      done();
    } catch (error) {
      expect(error.message).to.be.eqls(fixtures.invalidInput);
      done();
    }
  });

  it('should pass if all env variables are set.', (done) => {
    try {
      PropertyManager.config(fixtures.configSchema);
      const configProperties = PropertyManager.init();
      expect(configProperties).to.have.deep.property(fixtures.configSchema.requiredProperties[0]);
      done();
    } catch (error) {
      expect(error.message).to.be.eqls(fixtures.configPropertyMismatchErrorMsg);
      done();
    }
  });
});