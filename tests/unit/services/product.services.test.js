const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { productService } = require('../../../src/services');
const { insert } = require('../../../src/services/product.service');
const { allProducts, invalidProductName, validProductName, updateProductIdOne, updateProductWrongName, updateProductWrongId } = require('../mocks/products.mock');

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

  describe('Cadastra um novo produto', async function () {
    
    it('Cadastra um novo produto com valores validos', async function () {

      sinon.stub(productModel, 'insert').resolves([{ insertId: 1 }]);
      sinon.stub(productModel, 'findById').resolves(allProducts[0]);
      
      const result = await productService.insert({name: validProductName});
      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(allProducts[0]);
  
    });
    it('Retorna um erro ao tentar cadastrar com um nome inválido', async function () {
      const result = await insert(invalidProductName);

      expect(result.type).to.equal('PRODUCT_ERROR');
      expect(result.message).to.equal('"name" length must be at least 5 characters long');
    });
    it('Atualiza um produto por id', async function () {
      const { id, name } = updateProductIdOne;
      sinon.stub(productModel, 'updateById').resolves({ affectedRows: 1 });

      const result = await productService.updateById(id, name);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(updateProductIdOne);
    });

    it('Retorna um erro ao tentar atualizar com um nome inválido', async function () {
      const { id, name } = updateProductWrongName;
      sinon.stub(productModel, 'updateById').resolves({ affectedRows: 0 });

      const result = await productService.updateById(id, name);
      expect(result.type).to.equal('PRODUCT_ERROR');
      expect(result.message).to.deep.equal('"name" length must be at least 5 characters long');
    });
    
    it('Retorna um erro ao tentar atualizar com um id inválido', async function () {
      const { id, name } = updateProductWrongId;
      sinon.stub(productModel, 'updateById').resolves({ affectedRows: 0 });

      const result = await productService.updateById(id, name);
      expect(result.type).to.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.deep.equal('Product not found');
    });
  })

});