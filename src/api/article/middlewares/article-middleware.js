'use strict';

const populate = {
  user: {
    fields: ["firstName", "lastName", "bio", "email"],
    populate: "*",
  },
  cover: {
    fields: ["name", "alternativeText", "caption", "width", "height", "url"],
    populate: "*",
  },
  blocks: {
    populate: {
      file: {
        fields: ["name", "alternativeText", "caption", "width", "height", "url"],
        populate: "*",
      }
    }
  }
}

/**
 * `findBySlug` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In findBySlug middleware.');

    await next();
  };
};
