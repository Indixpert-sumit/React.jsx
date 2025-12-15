import ComponentB_ from './ComponentB'
const ComponentA_ = ({ name}) => {
    
  return (
    <div>
ComponentA_
      <ComponentB_ name={name} />
    </div>
  )
}

export default ComponentA_
