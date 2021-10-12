'use strict';
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */
const axios = require('axios');

module.exports = {lifecycles: {
  afterCreate: async entry => {
    axios
      .post(strapi.config.get('server.staticWebsiteBuildURL'), {})
      .catch(() => {
        // Ignore
      });
  },
  afterUpdate: async entry => {

    // console.log("entry update",strapi.config.currentEnvironment, strapi.config.get('server.staticWebsiteBuildURL'))
    // console.log("entry update2", axios)
    axios
      .post(strapi.config.get('server.staticWebsiteBuildURL'), {})
      .catch(() => {
        // Ignore
      });
  },
  afterDestroy: async entry => {
    axios
      .post(strapi.config.get('server.staticWebsiteBuildURL'), {})
      .catch(() => {
        // Ignore
      });
  },
}};
