import React from 'react'


const WelcomeMessage = (props : any) => {
    const isLoggedin = props.isLoggedIn;
    if(isLoggedin){
            return <h1>Welcome Back !</h1>
    }
    return <h1>Please Login!</h1>
        
}

export default WelcomeMessage