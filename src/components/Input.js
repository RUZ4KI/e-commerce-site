import React from 'react'
import { HiMinusSmall, HiPlusSmall } from 'react-icons/hi2'

export const Input = ({quantity, onIncrease, onDecrease}) => {
  return (
      <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
          <HiPlusSmall onClick={onIncrease} style={{cursor: 'pointer'}} />
          <input type="number" readOnly value={quantity} style={{width: '30px'}} />
          <HiMinusSmall onClick={onDecrease} style={{cursor: 'pointer'}} />
     </div>
  )
}
