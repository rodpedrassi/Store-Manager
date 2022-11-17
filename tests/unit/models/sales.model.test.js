const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/sales.model');

const salesMock = require('../mocks/sales.mock')

describe('Teste de unidade do model de sales', function () {
  afterEach(sinon.restore);
  
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