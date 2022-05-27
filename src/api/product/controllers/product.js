'use strict';

/**
 *  product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) =>  ({
  async populateProduct(ctx) {

      console.log("Starting to populate")

      // console.log(ctx)

      strapi.service('api::product.product').populateService();

      ctx.send("Finisched populate")

  }
}));
