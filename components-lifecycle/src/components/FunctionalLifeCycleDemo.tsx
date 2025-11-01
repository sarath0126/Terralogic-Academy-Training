import React, { useEffect, useState } from 'react'

const FunctionalLifeCycleDemo = () => {
    const [count , setCount] = useState<number>(0);
    useEffect(()=>{
        console.log("Component Mounted");

        console.log("Component UnMounted");
    } , [])
    useEffect(()=>{
        console.log("Component Updated: count changed to" , count);
    } , [count])
  return (
    <div>
        <h1>Functional Component Life Cycle</h1>
        <p>Count : {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}
export default FunctionalLifeCycleDemo