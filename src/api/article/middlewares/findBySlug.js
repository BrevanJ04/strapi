'use strict';

/**
 * `findBySlug` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In findBySlug middleware.');

    await next();
  };
};
