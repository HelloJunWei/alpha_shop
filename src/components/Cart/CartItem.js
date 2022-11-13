import React from 'react'
import { ReactComponent as MinusIcon } from '../icons/minus.svg'
import { ReactComponent as PlusIcon } from '../icons/plus.svg'
import './Cart.css'


const CartItem = ({ data }) => {

  const productList = data.map((product) => (
    <div
      className="product-container"
      data-count={product.quantity}
      data-price={product.price}
    >
      <img className="img-container" src={product.img} alt="" />
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            {/* <MinusIcon className="product-action minus" /> */}
            <div className="circle__container">－</div>
            <span className="product-count">{product.quantity}</span>
            {/* <PlusIcon className="product-action plus" /> */}
            <div className="circle__container">＋</div>
          </div>
        </div>
        <div className="price">${product.price * product.quantity}</div>
      </div>
    </div>
  ))
  return productList
}

export default CartItem