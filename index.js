const Ajv = require('ajv');
const { PropertyManagerFromENV } = require('./src/lib/services');

const { configSchema } = require('./schema/config-schema');
const validate = new Ajv({allErrors: true}).compile(configSchema);

class PropertyManager {
    static init() {
        const propertyManager = new this.properties.source(this.properties);
        propertyManager.init().validate();
        return propertyManager.properties.envConfig;
    }

    static config(properties){
        if(!validate(properties)) throw new Error('Invalid Config!');
        this.properties = properties;
    }
}

module.exports = { PropertyManager, PropertyManagerFromENV };
