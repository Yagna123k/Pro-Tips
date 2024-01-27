import React, { useState } from 'react'

const Register = () => {

    const [formSubmit, setFormSubmit] = useState(false)

    const [formErr, setFormErr] = useState({})

    const [formData, setFormData] = useState({
        email: '',
        firstName:'',
        lastName:'',
        phone:''
    })

const inputHandler = e=>{
        let {name, value} = e.target
        setFormData({
            ...formData, [name]:value
        })
    }

    const formSubmitHandler = (e)=>{
        e.preventDefault()
        let errors = validate(formData)
        setFormErr(errors)

        let errKeyArray = Object.keys(errors)
        if(errKeyArray.length == 0){
            setFormSubmit(true)
        }
        else{
            setFormSubmit(false)
        }
    }

    const validate = (data)=>{
        let error = {}

        if(data.firstName.trim()==''){
            error.firstName = 'Please enter your First Name'
        }
        if(data.lastName.trim()==''){
            error.lastName = 'Please enter your Last Name'
        }
        if(data.email.trim()==''){
            error.email = 'Please enter your Email'
        }
        if(data.phone.trim()==''){
            error.phone = 'Please enter your Phone Number'
        }
        if(data.phone.trim().length!==10){
            error.phone = 'Please enter 10-digit Phone Number'
        }
        return error
    }
  return (
    <div className='form-container'>
      <fieldset>
        <form action="">
            {formSubmit && <div className='success'>
                <p>Registration Successful</p>
            </div>}

            <label>First Name: </label>
            <input type="text" name='firstName' onChange={inputHandler} placeholder='First Name'/>
            {formErr.firstName && <p className='err'>{formErr.firstName}</p>}
            <label>Last Name: </label>

            <input type="text" name='lastName'onChange={inputHandler} placeholder='Last Name'/>
            {formErr.lastName && <p className='err'>{formErr.lastName}</p>}

            <label>Email: </label>
            <input type="email" name='email'onChange={inputHandler} placeholder='Email'/>
            {formErr.email && <p className='err'>{formErr.email}</p>}

            <label>Number: </label>
            <input type="number" name='phone'onChange={inputHandler} placeholder='Phone Number'/>
            {formErr.phone && <p className='err'>{formErr.phone}</p>}

            <input type="submit" value={'Register'} onClick={formSubmitHandler}/>
        </form>
      </fieldset>
    </div>
  )
}

export default Register
