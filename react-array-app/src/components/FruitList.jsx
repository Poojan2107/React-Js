import React from 'react'

const FruitList = () => {
    const fruits =['Apple','Banana','Kiwi','Grapes'];
  return (
    <div>
      <ul>
        {
            fruits.map((fruits,index)=>(
                <li key={index}>
                    {fruits}
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default FruitList
