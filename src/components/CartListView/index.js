import listContext from '../../context/listContext'

import CartItem from '../CartItem'

import './index.css'

// const cartList = [
//   {
//     title: 'Product 1',
//     brand: 'Brand Name',
//     id: 1001,
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
//     price: 760,
//     quantity: 5,
//   },
//   {
//     title: 'Product 2',
//     brand: 'Brand Name',
//     id: 1002,
//     imageUrl: 'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
//     price: 760,
//     quantity: 2,
//   },
//  ]

const CartListView = () => (
  <listContext.Consumer>
    {value => {
      const {cartList} = value
      let sai
      if (cartList.length !== 0) {
        sai = (
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
        )
      } else {
        sai = (
          <div>
            <h1>No Cart List</h1>
          </div>
        )
      }
      return {sai}
    }}
  </listContext.Consumer>
)
export default CartListView
