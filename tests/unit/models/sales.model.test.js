const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/sales.model');

const salesMock = require('../mocks/sales.mock')

describe('Teste de unidade do model de sales', function () {
  afterEach(sinon.restore);
  describe('Rota post ', function () {
    it('Cadastra uma nova sales', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
  
      const result = await salesModel.insertSales();
  
      expect(result).to.equal(1);
    });
  
    it('Cadastra um novo product_sales', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
  
      const result = await salesModel.insertSalesProduct(1, salesMock.newSales[0]);
  
      expect(result).to.equal(1);
    });
  });
  describe('Rota get ', function () {
    it('Recupera a lista de sales ', async function () {
      sinon.stub(connection, 'execute').resolves([salesMock.findAllSales]);
      const result = await salesModel.findAll();
      expect(result).to.be.deep.equal(salesMock.findAllSales);
    });
    it('Recupera uma sale a partir do id', async function () {
      sinon.stub(connection, 'execute').resolves([salesMock.findByIdSales]);
      const result = await salesModel.findById(1);
      expect(result).to.be.deep.equal(salesMock.findByIdSales);
    });
  });
});