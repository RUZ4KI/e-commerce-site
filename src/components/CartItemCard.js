import React, { useContext } from 'react'
import { HiTrash } from 'react-icons/hi2'
import { CartContext } from '../context/CartContext'
import { Input } from './Input'

export const CartItemCard = ({ data }) => {

    const { changeCartItemQuantity, removeCartItem } = useContext(CartContext)
    
    const handleIncrease = () => {
        changeCartItemQuantity(data.id, 'increase')
    }

    const handleDecrease = () => {
        changeCartItemQuantity(data.id, 'decrease')
    }

    const handleRemove = () => {
        console.log('in remove')
        removeCartItem(data.id)
    }

  return (
    <div style={{display: 'flex', flexDirection: 'row', paddingTop: '12px', paddingBottom: '12px'}}>
          <img src={data?.image} height="180px" width="180px" alt="" style={{marginRight: '18px'}} />
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
                  <div style={{ fontSize: '20px' }}>{data?.title}</div>
                  <div style={{ fontSize: '18px',marginBottom: '14px' }}>{data?.description}</div>
                  <div style={{fontSize: '18px'}}>{`Price: ${data?.price}`}</div>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Input
                        quantity={data?.quantity}
                        onDecrease={handleDecrease}
                        onIncrease={handleIncrease}
                    />
                    <HiTrash onClick={handleRemove} style={{marginLeft: '20px', cursor: 'pointer'}}/>
                  </div>
          </div>
    </div>
  )
}
