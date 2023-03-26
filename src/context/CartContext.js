import produce from "immer"
import React, { createContext, useEffect, useState } from "react"

const CART_ITEMS_KEY = 'cartItems'

export const CartContext = createContext()

export function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem(CART_ITEMS_KEY)

        if (storedCartItems) {
            JSON.parse(storedCartItems)
        }
        return []
    })

    function addToCartItem(item) {
        const itemAlreadyExists = cartItems.findIndex(
            (cartItem) => cartItem.id === item.id
        )

        const newCart = produce(cartItems, (draft) => {
            if (itemAlreadyExists < 0) {
                draft.push(item)
            } else {
                draft[itemAlreadyExists] += item.quantity
            }
        })

        setCartItems(newCart)
    }

    function removeCartItem(item) {
        const newCart = produce(cartItems, (draft) => {
          const itemExistsInCart = cartItems.findIndex(
            (cartItem) => cartItem.id === item,
          )
    
          if (itemExistsInCart >= 0) {
            draft.splice(itemExistsInCart, 1)
          }
        })
    
        setCartItems(newCart)
      }
    

    function changeCartItemQuantity(cartItemId,type) {
        const newCart = produce(cartItems, (draft) => {
          const itemExistsInCart = cartItems.findIndex(
            (cartItem) => cartItem.id === cartItemId,
          )
    
          if (itemExistsInCart >= 0) {
            const item = draft[itemExistsInCart]
            item.quantity =
              type === 'increase' ? item.quantity + 1 : item.quantity - 1
          }
        })
    
        setCartItems(newCart)
      }

    function emptyCart() {
        setCartItems([])
    }

    const cartQuantity = cartItems.length

    useEffect(() => {
        localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(cartItems))
    }, [cartItems])
    
    return (
        <CartContext.Provider
            value={{
                cartItems,
                cartQuantity,
                addToCartItem,
                removeCartItem,
                emptyCart,
                changeCartItemQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    )
}