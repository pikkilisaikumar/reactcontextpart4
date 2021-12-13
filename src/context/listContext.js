import React from 'react'

const listContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
})

export default listContext
