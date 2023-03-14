module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/article/get-by-slug/:slug',
      handler: 'article.findBySlug',
      config: {
        policies: [],
        middlewares: [
          "api::article.find-by-slug"
        ],
      }
    }
  ]
}