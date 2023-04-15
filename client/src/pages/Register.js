import React from 'react'
import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../cssWrapper/RegisterPage';
import { useAppContext } from '../context/appContext';

const initailState = {
  name:'',
  email:'',
  password:'',
  isMember:true,
  
}

const Register = () => {
  const [values, setValues] = useState(initailState);
  const {isLoading, showAlert,displayAlert}=useAppContext()
  const toggleMember = () =>{
    setValues({...values, isMember:!values.isMember })
  }

  const handleChange = (e) => {
    setValues({...values,[e.target.name]:e.target.value})
  }

  const onSubmit = (e) =>{
    e.priventDefault()
    const {name,email,password,isMember}=values;
    if(!email || !password || (!isMember && !name)){
      displayAlert();
      return
    }
    console.log(values)
  }
  return <Wrapper className='full-page'>
    <form className='form' onSubmit={onSubmit}>
      <Logo/>
 
      <h3>{values.isMember ? 'Login' : 'Register'}</h3>
      {showAlert && <Alert/> }
       
      {/*Form name field, only viisble if in register & isMember is false*/}
      {!values.isMember &&(
        <FormRow type='text' 
          name='name' 
          value={values.name} 
          handleChange={handleChange}
        />
      )}
      

      {/*Form email field*/}
      <FormRow type='email' 
      name='email' 
      value={values.email} 
      handleChange={handleChange}
      />

      {/*Form password field*/}
      <FormRow type='password' 
      name='password' 
      value={values.password} 
      handleChange={handleChange}
      />
      <button type="submit" className='btn btn-block'>Submit</button>
      <p>
        {values.isMember?'Not registered yet ???':'Already have an account???'}
        <button type='button' 
        onClick={toggleMember}
        className='member-btn'>
          {values.isMember ? 'Register' : 'Login'}
        </button>
      </p>
    </form>
  </Wrapper>
  
}

export default Register 