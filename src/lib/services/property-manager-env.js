const BasePropertyManager = require('./base-porperty-manager');

class PropertyManagerFromENV extends BasePropertyManager {
  constructor(properties) {
    super();
    this.properties = properties;
  }
  init() {
    this.properties.envConfig = process.env;
    return this;
  }
}

module.exports = { PropertyManagerFromENV };
