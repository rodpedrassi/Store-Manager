const salesWithWrongId = 
  [
    {
      "productId": 50,
      "quantity": 5
    },
    {
      "productId": 1,
      "quantity": 1
    }
  ];
const salesWithWrongQuantity = 
  [
    {
      "productId": 1,
      "quantity": 0
    },
    {
      "productId": 1,
      "quantity": -2
    }
  ];
const salesWithoutQuantity = 
  [
    {
      "productId": 50
    },
    {
      "productId": 1,
      "quantity": 1
    }
  ];
const salesWithoutProductId = 
  [
    {
      "productId": 50,
      "quantity": 5
    },
    {
      "quantity": 1
    }
  ];

const newSales = 
  [
    {
      "productId": 2,
      "quantity": 5
    },
    {
      "productId": 1,
      "quantity": 3
    }
  ];

const newSalesProduct =
{
  id: 3,
  itemsSold: [
    {
      productId: 2,
      quantity: 5,
    },
    {
      productId: 1,
      quantity: 3,
    }
  ]
};

module.exports = {
  salesWithWrongId,
  salesWithWrongQuantity,
  salesWithoutProductId,
  salesWithoutQuantity,
  newSales,
  newSalesProduct,
};