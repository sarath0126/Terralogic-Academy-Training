import React from 'react'

const ChildComponent = (props : any) => {
  return (
    // props.parentData = 'my custom data' ()
    <div>
        <p>{props.myProp}</p>
        <button onClick={props.onClickButton}>Click me to alert Parent</button>
    </div>
  )
}

export default ChildComponent