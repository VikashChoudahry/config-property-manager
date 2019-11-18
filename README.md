# About

The purpose of this package is to validate all the initialization/environment variable(s) which is/are required for an app to start. In case, the environment variable(s) is/are missing then this will throw an error and app will not start. If all the required environment variable(s) are set properly then the same will available to the app and same can be used further.

## Pre-requisite

1. Client has to set the config as below:

```$bash
  {
    source: <provider_name>
    requiredProperties: []
  }
```

For e.g.:

Sample input:

```$bash
  {
    source: PropertyManagerFromENV,
    requiredProperties: ['PORT', 'ENV']
  }
```

**Note**:

1. Property Manager library will be responsible to proivde the available provider (or datasrouce) name.

2. Currenlty, the only datasource available is, PropertyManagerFromENV.

## Steps to use (In any node.js app)

1. Add this library as a dependency in the package.json.

2. Considering for config properties the source is env variables. So, need to add the below lines in the client.
  For e.g. const { PropertyManager, PropertyManagerFromENV } = require('config-properties-manager');

3. Add the configuration schema which should contain the required config proerpty needed to start the app.

4. In the entiry of node.js app inititate the configuration property manager with required config schema and datasource.
For more details please refer to: <https://github.com/VikashChoudahry/test-express-app.git>

5. Get the required config proeprties using above library.
  PropertyManager.config(<sample_input>); // Refer: Pre-requisite steps.
  global.config = propertyManager.init(); // To set the process env varialbes globally.

6. Once everything is set application will boots-up and api app server will be available to access.

### Contribution

Thanks for your contribution!

If you're willing to contribute then please follow the below setps:

- Update the package version:
To make the significant changes to this package, it's recommendable that update the version number to communicate the extent of the changes to others who rely on this library.

  Change the version number in package.json.
    To Allow Patch Releases: 1.0 or 1.0.x or ~1.0.0
    To Allow Minor Releases: 1 or 1.x or ^1.0.0
    To Allow Major Releases: * or x

- Add tests (if required).
- Run tests, `$ npm test`
- Check for coverage test report `$ npm run coverage` (it should be above 80%)
- Pull the latest changes. If you find any conflicts, resolve them, and push your code.
- Assign reviewer to your Merge Request.

### Example

Please refer: <https://github.com/VikashChoudahry/test-express-app.git>

**Note:**
If in future any datasource (API, DB etc) needs to be introduced then respective provider implementation will be added and released.
