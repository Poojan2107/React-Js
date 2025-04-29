import React from 'react'

const ArrayData = ({even}) => {
  return (
    <div>
      <h1>Even Number :- 

<ul>
    {
        even.map((data,index) => (
            <li key={index}>{data}</li>
        ))
    }
</ul>

      </h1>
    </div>
  )
}

export default ArrayData
