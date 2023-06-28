const formatedReturnedOrders = [
  {
    "id": 1,
    "userId": 1,
    "productIds": [
      2,
      1
    ]
  },
  {
    "id": 2,
    "userId": 3,
    "productIds": [
      4,
      3
    ]
  },
  {
    "id": 3,
    "userId": 2,
    "productIds": [
      5
    ]
  }
]

const returnedOrders = [
  {
    "id": 1,
    "userId": 1,
    "productIds": [
      {
        "id": 2
      },
      {
        "id": 1
      }
    ]
  },
  {
    "id": 2,
    "userId": 3,
    "productIds": [
      {
        "id": 4
      },
      {
        "id": 3
      }
    ]
  },
  {
    "id": 3,
    "userId": 2,
    "productIds": [
      {
        "id": 5
      }
    ]
  }
]

export default {
  returnedOrders,
  formatedReturnedOrders,
};