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

const returnGetProducts = [
  {
    id: 1,
    name: 'Excalibur',
    price: '10 peças de ouro',
    orderId: 1
  },
  {
    id: 2,
    name: 'Espada Justiceira',
    price: '20 peças de ouro',
    orderId: 1
  },
  {
    id: 3,
    name: 'Lira de Orfeu',
    price: '1 peça de ouro',
    orderId: 2
  },
  {
    id: 4,
    name: 'Armadura de Aquiles',
    price: '1 peça de ouro',
    orderId: 2
  },
  {
    id: 5,
    name: 'Harpa de Dagda',
    price: '15 peças de ouro',
    orderId: 3
  },
  {
    id: 6,
    name: 'Martelo de Thor',
    price: '30 peças de ouro',
    orderId: 4
  }
]

export default {
  newProduct,
  postProduct,
  returnCreate,
  returnCreateService,
  returnGetProducts
}
