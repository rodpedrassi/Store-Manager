const allProducts = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Martelo de Bhor',
  },
  {
    id: 3,
    name: 'Martelo de Zhor',
  },
];

const updateProductIdOne = {
  id: 1,
  name: 'Ban Hammer',
}
const updateProductWrongId = {
  id: 111,
  name: 'Ban Hammer',
}
const updateProductWrongName = {
  id: 1,
  name: 'Ban',
}

const invalidProductName = 'Prod';
const validProductName = 'Produ';

module.exports = {
  allProducts,
  invalidProductName,
  validProductName,
  updateProductIdOne,
  updateProductWrongId,
  updateProductWrongName,
}