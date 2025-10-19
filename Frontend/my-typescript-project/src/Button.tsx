import React from 'react'


const Button = (props:{name:string}) => {
    // const {name}=props;
  return (
    <>
     <button style={{backgroundColor:'blue', color:'white'}}>
       {props.name}
     </button>
    </>
  )
}


export default Button