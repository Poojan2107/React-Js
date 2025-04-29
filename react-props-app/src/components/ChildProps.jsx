import React from 'react'

const ChildProps = (props) => {
  return (
    <div>
      <h1>Name = {props.name}</h1>
      {props.children}
    </div>
  )
}

export default ChildProps
