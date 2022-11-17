const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT 
      sp.sale_id AS saleId,
      s.date,
      sp.product_id AS productId,
      sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN  StoreManager.sales AS s
      ON sp.sale_id = s.id
    ORDER BY sp.sale_id, sp.product_id`,
  );
  return result;
};

const findById = async (id) => {
  const [result] = await connection.execute(
    `SELECT 
      sp.sale_id AS saleId,
      s.date,
      sp.product_id AS productId,
      sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN  StoreManager.sales AS s
      ON sp.sale_id = s.id
    WHERE sp.sale_id = ${id}
    ORDER BY sp.sale_id, sp.product_id`,
  );
  return result;
};

const insertSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (now())',
    [],
  );
  return insertId;
};

const insertSalesProduct = async (saleId, product) => {
  // console.log('id: ', saleId);
  // console.log('product: ', product);
    const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.sales_products 
     (sale_id, product_id, quantity)
     VALUES(?, ?, ?)`,
    [saleId, ...Object.values(product)],
  );
  return insertId;
};

module.exports = {
  findAll,
  findById,
  insertSales,
  insertSalesProduct,
};