const returnGetOrders = [
  {
    id: 1,
    userId: 1,
    productIds: [
      {id: 2},
      {id: 1}
    ]
  },
  {
    id: 2,
    userId: 3,
    productIds: [
      {id: 4},
      {id: 3}
    ]
  },
  {
    id: 3,
    userId: 2,
    productIds: [
      {id: 5}
    ]
  }
]

const returnGetOrdersBody = [
  {
    id: 1,
    userId: 1,
    productIds: []
  },
  {
    id: 2,
    userId: 3,
    productIds: []
  },
  {
    id: 3,
    userId: 2,
    productIds: []
  }
]

const newOrder = {
  productIds: [1, 2],
  userId: 1
}

const orderPost = {
  id: 3,
  userId: 1,
  productIds: [ {id: 1}, {id: 2} ],
}

const returnCreateService = {
  status: 201,
  data: newOrder,
}

export default {
  returnGetOrders,
  returnGetOrdersBody,
  newOrder,
  orderPost,
  returnCreateService,
}