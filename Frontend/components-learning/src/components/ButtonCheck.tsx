import React from 'react'

const ButtonCheck = () => {
    const handleButton = ()=>{
        alert("Button Clicked !");
    }
  return (
    <>
        <button onClick={handleButton}>Click Me</button>
    </>
  )
}

export default ButtonCheck;