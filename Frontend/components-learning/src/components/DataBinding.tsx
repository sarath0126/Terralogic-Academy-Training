import React, { useState } from 'react'

const DataBinding = () => {
    const [inputVal, setInputVal] = useState<string>('')
    const [password, setPassword] = useState('')
    const submitHandler =(e: any)=>{
        e.preventDefault();
        console.log('submitting:', inputVal)
        console.log('submitting password:', password)
    }

    const handleType = (e: any) => {
        setInputVal(e.target.value)
         console.log('typed character:', e.target.value)
    }
    const handlePassword = (e: any) => {
        setPassword(e.target.value)
    }

  return (
    <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter your name' value={inputVal} onChange={handleType}/>
        <input type="password" placeholder='Enter your password' value={password} onChange={handlePassword}/>
        <button>Submit</button>
    </form>
  )
}

export default DataBinding

// import React from 'react'

// const DataBinding = () => {
//     const submitHandler = (e: any) => {
//         e.preventDefault();
//         console.log('Submit:', e.target.value)
//     }


//   return (
//     <form onSubmit={submitHandler}>
//         <input type="text" placeholder='Enter your name' value={"sarath"}/>
//         <button>Submit</button>
//     </form>
//   )
// }

// export default DataBinding


// import React from 'react'

// const DataBinding = () => {
//     const submitHandler = (e: any) => {
//         e.preventDefault();
//         const myInput = document.getElementById("name")
//         console.log('value submitted:',myInput?.innerText)
//     }


//   return (
//     <form onSubmit={submitHandler}>
//         <input type="text" placeholder='Enter your name' id="name"/>
//         <button>Submit</button>
//     </form>
//   )
// }

// export default DataBinding