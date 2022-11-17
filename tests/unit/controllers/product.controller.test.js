const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;
chai.use(sinonChai);

const { productController } = require('../../../src/controllers');
const { productService } = require('../../../src/services');
const { newProduct } = require('../mocks/newProduct.mock');
const { allProducts, updateProductIdOne } = require('../mocks/products.mock');




describe('Teste de unidade do controller de products', function () {

  afterEach(sinon.restore);

  it('Recupera a lista de produtos ', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, 'findAll')
      .resolves({ type: null, message: allProducts });
    
    await productController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts);
  });
  it('Recupera um produto por ID', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, 'findById')
      .resolves({ type: null, message: allProducts[0] });

    await productController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts[0]);
  });
  it('Cadastra um novo produto', async function () {
    const res = {};
    const req = {
      body: newProduct,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, 'insert')
      .resolves({ type: null, message: newProduct });

    await productController.insert(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProduct);
  });
  it('Atualiza um produto', async function () {
    const res = {};
    const req = {
      body: {
        name: 'Ban Hammer',
      },
      params: {
        id: 1,
      }
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'updateById').resolves({ type: null, message: updateProductIdOne });
    await productController.updateById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(updateProductIdOne);
  });
  it('Retorna um erro ao tentar atualizar com um nome inválido', async function () {
    const res = {};
    const req = {
      body: {
        name: 'Ban',
      },
      params: {
        id: 1,
      }
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'updateById').resolves({ type: 'PRODUCT_ERROR', message: '"name" length must be at least 5 characters long' });

    await productController.updateById(req, res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' });
  });
  it('Retorna um erro ao tentar atualizar com um id inválido', async function () {
    const res = {};
    const req = {
      body: {
        name: 'Ban Hammer',
      },
      params: {
        id: 1,
      }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'updateById').resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });

    await productController.updateById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
});