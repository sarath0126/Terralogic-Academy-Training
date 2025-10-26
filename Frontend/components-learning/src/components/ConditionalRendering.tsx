import React from 'react'
type IProps = {
    isLoggedIn : boolean;
    defaultProp?: boolean;
}

const ConditionalRendering = (props:IProps) => {
    const {isLoggedIn , defaultProp = "No Val from parent"} = props;
    console.log("defaultprop" , defaultProp);

    const checkIfUserHasAccount = (hasAccount : boolean)=>{
        if(hasAccount) return <h1>User can Login</h1>
        return <h1>User Need a Register</h1>
    }
  return (
    <div>{isLoggedIn ? <h1>Yes,Login</h1> : checkIfUserHasAccount(true)}</div>
  )
}

export default ConditionalRendering