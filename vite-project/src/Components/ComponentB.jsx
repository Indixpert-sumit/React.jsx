import React from 'react'
import ComponentC_ from './ComponentC'

const ComponentB_ = ({ name}) => {
  return (
    <div>
   ComponentB_
      {/* name={name} */}

<ComponentC_ name={name} />   
</div>
  )
}

export default ComponentB_
