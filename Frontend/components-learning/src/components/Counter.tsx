import React, { useState } from 'react'

const Counter = () => {
    const [count , setCount] = useState(0);
    const incrementHandler = ()=>{
        setCount(count + 1)
    }

    const decrementHandler = ()=>{
       setCount(count>0 ? count-1 : 0);
    }
   return (
   <>
        <p>Count Value : {count}</p>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
   </>
  )
}

export default Counter