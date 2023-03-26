import React, { useContext } from 'react'
import { HiShoppingCart } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const Header = () => {

    const { cartQuantity } = useContext(CartContext)
    
    return (
      <div style={{  width: '100%',
        height: '6.5rem',
        background: 'rgb(250, 250, 250)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 5,
      }}
      >            
      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width:'100%',
          alignItems: 'center'
        }}
        >
            <NavLink to="/">
                <div style={{fontSize: '24px', color: 'black'}}>E-Commerce Site</div>
            </NavLink>
            <div>
            <NavLink to="/cart">
                <div>
                    {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                    <HiShoppingCart />
                </div>
            </NavLink>    
            </div>
      </div>
      </div>
  )
}
