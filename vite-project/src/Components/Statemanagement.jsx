import React from 'react'
import { useState } from 'react'
import ComponentA_ from './ComponentA'

const Statemanagement_ = () => {
        const [name, ]= useState('hello Indixpert') 

  return (
    <div>
      Statemanagement_ name={name}
      <ComponentA_ name={name} />
    </div>
  )
}

export default Statemanagement_
