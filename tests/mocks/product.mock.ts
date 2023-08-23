const newProduct = {
  name: 'Martelo de Thor',
  price: '30 peças de ouro',
  orderId: 4
} 

const postProduct = {
  id: 6,
  name: 'Martelo de Thor',
  price: '30 peças de ouro',
  orderId: 4
}

const returnCreate = {
  id: 6,
  name: 'Martelo de Thor',
  price: '30 peças de ouro'
}

const returnCreateService = {
  status: 201,
  data: returnCreate
}

export default {
  newProduct,
  postProduct,
  returnCreate,
  returnCreateService
}
