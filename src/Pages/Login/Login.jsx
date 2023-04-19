import React, {useState} from 'react'
import Styles from '../Registeration/RegestrationForm.module.css'
import {Link} from 'react-router-dom'

export function Login(){
  
  const registerData = localStorage.getItem('details')
  console.log(registerData)
  return(
    <div>
      <div className={Styles.container}>
      <div className={Styles.innerContainer} >
      <form type='submit'>
        <h1>Login Here</h1>
        <input  placeholder='Email' type='email'/>
        <input  placeholder='Password' type='password'/>
        <span>Not a member? <Link to='/register'>Register here</Link></span>        
        <button className={Styles.submitButton}>Submit</button>
      </form>
      </div>
    </div>
    </div>
  )
}