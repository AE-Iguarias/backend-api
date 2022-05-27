module.exports = {
  routes: [
    { // Path defined with a URL parameter
      method: 'POST',
      path: '/product/populate',
      handler: 'product.populateProduct',
    }
  ]
}
