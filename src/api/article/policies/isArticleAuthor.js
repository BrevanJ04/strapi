'use strict';

/**
 * `isArticleAuthor` policy
 */

module.exports = async (policyContext, config, { strapi }) => {
  // Add your own logic here.
  strapi.log.info('In isArticleAuthor policy.');

  const user = policyContext.state.user;
  const articleId = policyContext.params.id;
  if (!user || !articleId) return false;

  const article = await strapi.entityService.findOne('api::article.article', articleId, {
    populate: { user: true }
  });

  function isArticleAuthor(article) {
    return article.user.id === user.id;
  }

  if (isArticleAuthor(article)) {
    strapi.log.info('Yes you can do this.');
    return true;
  }
  
  strapi.log.info('No you cannot do this.');
  return false;
};
