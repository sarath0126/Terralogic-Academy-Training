import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonNavigation = () => {
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate("/about");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ButtonNavigation