import React from 'react'

const UserList = () => {
    const arr = [12,34,56];
    const  [x,y,z] = arr;
     
  return (
    
      <div>
        <h1> X : {x} </h1>
        <h1> Y : {y} </h1>
        <h1> Z : {z} </h1>
      </div>
    

  )
}

export default UserList
