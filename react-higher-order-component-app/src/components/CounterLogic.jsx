import React, { useState } from 'react'

const CounterLogic = (WrappedComponent) => {
    
    const EnhancedComponent = () => {

        const [count , setCount] = useState(0);

        const increament = () => {

            setCount(count+1);

        }

        return(
            <WrappedComponent count={count} increament={increament}/>
        )
    }
  return EnhancedComponent
}

export default CounterLogic
