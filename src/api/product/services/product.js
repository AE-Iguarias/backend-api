'use strict';

/**
 * product service.
 */

const { createCoreService } = require('@strapi/strapi').factories;
const axios = require ("axios")

// async function getProductInfo(urls) {
//   const jsdom = require("jsdom");
//   const { JSDOM } = jsdom;
//   const body = await axios.get(urls)
//   const dom = new JSDOM(body.data);

//   const description = dom.window.document.querySelector('#product-description');

//   return {
//     short_description: description.textContent.slice(0, 160),
//     description: description.innerHTML
//   }
//   console.log (short_description)
// }

module.exports = createCoreService('api::product.product', ({ strapi }) =>  ({
  async populateService (params) {
    const casasbahiasApiUrl = `https://www.casasbahia.com.br/api/catalogo-ssr/products/?RegistrosPorPagina=20&Platform=1&Filtro=c56&FiltroFaixaPreco=1000to9999&PaginaAtual=1`

    const {
      data:{
        products:[
          {id},{urls}
        ]
    },

    } = await axios.get(casasbahiasApiUrl)

    console.log(id, urls)
  }
}));


