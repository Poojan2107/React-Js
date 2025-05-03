import React, { useEffect, useState } from 'react'

const ComponentLifeCycle = () => {

    const [count , setCount] = useState(0);

    useEffect( ()=> {
        console.log("Mounting...")

        return () => {
            console.log("Component will unmount.")
        };
    }, []);

    useEffect( () => {
        console.log("Updating...")
    }, [count]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=> setCount(count+1)}>Increament.</button>
    </div>
  )
}

export default ComponentLifeCycle

