process.env.NODE_ENV = 'test';

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
/* istanbul ignore next */
['.css', '.scss', '.png', '.jpg'].forEach(ext => {
  require.extensions[ext] = () => null;
});

// add required globals
/* eslint-disable no-empty-function */
/* istanbul ignore next */
global.logger = function() {};
/* istanbul ignore next */
global.logger.info = function() {};
/* istanbul ignore next */
global.logger.apiSuccess = function() {};
/* istanbul ignore next */
global.logger.apiError = function() {};
/* istanbul ignore next */
global.logger.warn = function() {};
/* eslint-enable */

// Register babel so that it will transpile ES6 to ES5
// before our tests run.
require('babel-register')();
require('babel-polyfill');

const chai = require('chai');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(sinonChai);
chai.use(chaiAsPromised);
