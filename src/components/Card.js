import React, { useContext, useState } from 'react'
import { HiShoppingCart } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { Input } from './Input'

export const Card = ({ data, key }) => {
    const {addToCartItem} = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)

    const handleDecrease = () => {
        setQuantity(quantity - 1)
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1)
    }

    const handleAddToCart = () => {
        const itemToAdd = {
            ...data,
            quantity
        }

        addToCartItem(itemToAdd)
        setQuantity(1)
    }


    return (
        <div key={key} style={{marginBottom: '20px'}}>
                <NavLink to={`/${data.id}`}>
                <img src={data?.image} height="240px" width="240px" alt="" />
                </NavLink>
                <div style={{width: '240px'}}>              
                <div>{data?.title}</div>
                <div>{`Price: ${data?.price}`}</div>
                <div>{`Category: ${data?.category}`}</div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <HiShoppingCart style={{cursor: 'pointer'}} onClick={handleAddToCart} />
                    <Input
                        quantity={quantity}
                        onDecrease={handleDecrease}
                        onIncrease={handleIncrease}
                    />
                </div>
                </div>
            </div>
  )
}
