import './index.css'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

const Cart = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="bg-container-product-cart">
      <div className="img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
        />
      </div>
    </div>
  )
}

export default Cart
