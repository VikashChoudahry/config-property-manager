class BasePropertyManager {
  constructor(properties) {
    this.properties = properties;
  }

  validate() {
    if (!this.properties.requiredProperties) return true;
    this.properties.requiredProperties.forEach((property) => {
      if (!this.properties.envConfig[property]) throw new Error('Config property mismatch!')
    });
    return true;
  }
}

module.exports = BasePropertyManager;
