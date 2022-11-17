const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../src/models/sales.model');
const productsModel = require('../../../src/models/product.model');
const salesService = require('../../../src/services/sales.service');

const salesMock = require('../mocks/sales.mock');

describe('Teste de unidade do services de sales', function () {

  afterEach(sinon.restore);

  it('Recupera a lista de sales ', async function () {
      sinon.stub(salesModel, 'findAll').resolves(salesMock.findAllSales);
      
      const result = await salesService.findAll();

      expect(result.message).to.deep.equal(salesMock.findAllSales);
  });

  it('Recupera uma sale a partir do id', async function () {
      sinon.stub(salesModel, 'findById').resolves(salesMock.findByIdSales);
      
      const result = await salesService.findById(1);

      expect(result.type).to.equal(undefined);
      expect(result.message).to.deep.equal(salesMock.findByIdSales);
  });
  
  it('Cadastra uma nova product_sales', async function () {
      sinon.stub(salesModel, 'insertSales').resolves(3);
      sinon.stub(productsModel, 'findById').resolves(true);
      sinon.stub(salesModel, 'insertSalesProduct').resolves();

      const result = await salesService.insert(salesMock.newSales);

      expect(result).to.deep.equal({ type: null, message: salesMock.newSalesProduct });
  });
  
  it('Erro ao tentar cadastrar sales com productId inválido', async function () {
      sinon.stub(productsModel, 'findById').resolves(false);

      const error = await salesService.insert(salesMock.salesWithWrongId);

      expect(error.type).to.equal('PRODUCT_NOT_FOUND');
      expect(error.message).to.deep.equal('Product not found');
  });
  
  it('Erro ao tentar cadastrar sales com quantity <= ZERO', async function () {
      sinon.stub(salesModel, 'insertSales').resolves(3);
      sinon.stub(productsModel, 'findById').resolves(true);
      sinon.stub(salesModel, 'insertSalesProduct').resolves();
      
      const error = await salesService.insert(salesMock.salesWithWrongQuantity);

      expect(error.type).to.equal('SALES_ERROR');
      expect(error.message).to.deep.equal('"quantity" must be greater than or equal to 1');
  });

});