import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [parentData, setParentData] = useState('some parent data')
    const handleClick = ()=>{
        alert("Alert From Child");
    }
  return (
        <ChildComponent onClickButton = {handleClick} myProp={parentData}/>
  )
}


export default ParentComponent
