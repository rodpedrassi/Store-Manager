const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { newProduct } = require('../mocks/newProduct.mock');
const { allProducts } = require('../mocks/products.mock');

describe('Teste de unidade do model de products', function () {

  afterEach(sinon.restore);

  it('Recupera a lista de produtos ', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);
    const result = await productModel.findAll();
    expect(result).to.be.deep.equal(allProducts);
  });
  it('Recupera um produto a partir do id', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts[0]]);
    const result = await productModel.findAll(1);
    expect(result).to.be.deep.equal(allProducts[0]);
  });
  it('Cadastra um novo produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 50 }]);
    const result = await productModel.insert(newProduct);
    expect(result).to.equal(50);
  });
});