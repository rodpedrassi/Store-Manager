const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { productService } = require('../../../src/services');
const { allProducts } = require('../mocks/products.model.mock');

describe('Teste de unidade de service de products', function () {

  afterEach(sinon.restore);

  it('Recupera a lista de produtos ', async function () {
      sinon.stub(productModel, 'findAll').resolves(allProducts);
      
      const result = await productService.findAll();

      expect(result.message).to.deep.equal(allProducts);
  });

  it('Recupera um produto a partir do id', async function () {
      sinon.stub(productModel, 'findById').resolves(allProducts[0]);
      
      const result = await productService.findById(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(allProducts[0]);
});

});