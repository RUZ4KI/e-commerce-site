import React from 'react'
import { HiMinusSmall, HiPlusSmall } from 'react-icons/hi2'

export const Input = ({quantity, onIncrease, onDecrease}) => {
  return (
      <div>
          <HiPlusSmall onClick={onIncrease} style={{cursor: 'pointer'}} />
          <input type="number" readOnly value={quantity} />
          <HiMinusSmall onClick={onDecrease} style={{cursor: 'pointer'}} />
    </div>
  )
}
