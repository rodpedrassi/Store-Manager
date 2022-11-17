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

const findAllSales = [
  {
    "saleId": 1,
    "date": "2022-11-17T20:30:11.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2022-11-17T20:30:11.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2022-11-17T20:30:11.000Z",
    "productId": 3,
    "quantity": 15
  },
  {
    "saleId": 3,
    "date": "2022-11-17T20:32:15.000Z",
    "productId": 1,
    "quantity": 1
  },
  {
    "saleId": 3,
    "date": "2022-11-17T20:32:15.000Z",
    "productId": 1,
    "quantity": 1
  },
  {
    "saleId": 4,
    "date": "2022-11-17T20:32:15.000Z",
    "productId": 1,
    "quantity": 1
  },
  {
    "saleId": 4,
    "date": "2022-11-17T20:32:15.000Z",
    "productId": 1,
    "quantity": 1
  },
  {
    "saleId": 5,
    "date": "2022-11-17T20:32:16.000Z",
    "productId": 1,
    "quantity": 1
  },
  {
    "saleId": 5,
    "date": "2022-11-17T20:32:16.000Z",
    "productId": 1,
    "quantity": 1
  }
];

const findByIdSales = [
  {
    "saleId": 1,
    "date": "2022-11-17T20:30:11.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2022-11-17T20:30:11.000Z",
    "productId": 2,
    "quantity": 10
  },
];

module.exports = {
  salesWithWrongId,
  salesWithWrongQuantity,
  salesWithoutProductId,
  salesWithoutQuantity,
  newSales,
  newSalesProduct,
  findAllSales,
  findByIdSales,
};