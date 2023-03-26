import React, { useContext } from 'react'
import { CartItemCard } from '../components/CartItemCard'
import { CartContext } from '../context/CartContext'

export const Cart = () => {

    const {cartItems} = useContext(CartContext)

  return (
    <div>
          <h1>Shopping Cart</h1>
          {cartItems.map((item) => (
              <CartItemCard data={item} />
          ))}
    </div>
  )
}
