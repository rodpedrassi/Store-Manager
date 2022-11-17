const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesController = require('../../../src/controllers/sales.controller');
const salesService = require('../../../src/services/sales.service');

const salesMock = require('../mocks/sales.mock');


describe('Teste de unidade de controller de sales', function () {
    
  afterEach(sinon.restore);

  it('Recupera a lista de sales ', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'findAll')
      .resolves({ type: null, message: salesMock.findAllSales });
    
    await salesController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesMock.findAllSales);
  });

  it('Recupera uma sale pelo ID', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'findById')
      .resolves({ type: null, message: salesMock.findByIdSales });

    await salesController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesMock.findByIdSales);
  });
    
  it('Cadastra uma nova sales', async function () {
    const res = {};
    const req = {
      body: salesMock.newSales
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'insert').resolves({ type: null, message: salesMock.newSale });
    await salesController.insert(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(salesMock.newSale);
  });

  it('Erro ao tentar cadastrar sales com productId inválido', async function () {
    const res = {};
    const req = {
      body: salesMock.salesWithWrongId,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'insert').resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });
    await salesController.insert(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('Erro ao tentar cadastrar sales com quantity <= ZERO', async function () {
    const res = {};
    const req = {
      body: salesMock.salesWithWrongQuantity,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesService, 'insert').resolves({
      type: 'SALES_ERROR', message: '"quantity" must be greater than or equal to 1',
    });

    await salesController.insert(req, res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" must be greater than or equal to 1' });
  });
});