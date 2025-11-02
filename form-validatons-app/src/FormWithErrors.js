import React, { useState } from 'react'

const FormWithErrors = () => {
    const [formData , setFormData] = useState({name : "" , email:""});
    const [errors , setErrors] = useState({});

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name] : value,
        }));
    }

    const validate = () => {
        let tempErrors = {};
        if(!formData.name.trim()) tempErrors.name = "Name is Required";
        if(!formData.email.trim()) tempErrors.email = "Email is Required";

        else if (!/\S+@\S+\.\S+/.test(formData.email))
            tempErrors.email = "Enter a Valid Email";
       
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(validate()){
            console.log("Form is Valid: " ,formData);
            alert("Form Submitted Successfully");
            setFormData({name :"" , email:""}); // These We Use For Reset Submissions
            setErrors({});
        }
    }

  return (
    <form
    onSubmit={handleSubmit}
    style={{maxWidth: 300 , margin:"20px auto"}}
    >
        <div style={{marginBottom : 10}}>
            <label>Name :</label>
            <br />
            <input
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                style={{width:"100%" , padding: 5}}         
            />
            {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
        </div>

        <div style={{marginBottom: 10}}>
            <label>Email:</label>
            <br/>

            <input
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter Your Email'
                style={{width: "100%" , padding: 5}}
            />
            {errors.email && <p style={{color : "red"}}>{errors.email}</p>}
        </div>

        <button type='submit' style={{padding:"6px 12px"}}>Submit</button>

    </form>
  )
}

export default FormWithErrors