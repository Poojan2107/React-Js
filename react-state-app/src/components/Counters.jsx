import React, { useState } from 'react'

const Counters = () => {
    const[count ,setCount] = useState(0);
    const handleDecreament = () => {
        if(count>0){
            setCount(count-1);
        }
           
    }
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increament</button>
      <button onClick={handleDecreament}>Decreament</button>
    </div>
  )
}

export default Counters
