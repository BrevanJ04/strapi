var slugify = require('slugify')

module.exports = {
  afterCreate(event) {

  },

  beforeUpdate(event) {
    const params = event.params;

    // If the title has changed, update the slug
    const slugExpected = slugify(params.data.title, { lower: true });
    const slugActual = params.data.slug;
    if (slugExpected !== slugActual) event.params.data.slug = slugify(params.data.title, { lower: true });
  },

  async afterUpdate(event) {
    const { result, params } = event;
    
    const emailData = {
      to: "paul.bratslavsky@strapi.io",
      subject: "Article Updated",
      text: `The article ${result.title} has been updated.`
    }

    await strapi.service("api::send-email.send-email").sendEmail(emailData)
  },
};