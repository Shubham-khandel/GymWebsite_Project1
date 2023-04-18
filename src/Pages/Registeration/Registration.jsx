import React, {useState} from "react";
import Styles from './RegestrationForm.module.css'
import { Link } from "react-router-dom";

export default function Registration() {
  const [name , setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('')
  const [details, setDetails] = useState([])

  const obj = {name:name,email:email,number:number,password:password}

  function handleSubmit(e){
    e.preventDefault()
    let newData = [...details, obj]
    setDetails(newData);
    console.log(newData)
    localStorage.setItem("userdetails",JSON.stringify(newData))
    setEmail('')
    setName('')
    setNumber('')
    setPassword('')
  }


  return (

    <div className={Styles.container}>
      <div className={Styles.innerContainer} >
      <form type='submit'>
        <h1>Register Here</h1>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Full Name' type='text'/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type='email'/>
        <input value={number} onChange={(e)=>setNumber(e.target.value)} placeholder='Phone Number' type='number'/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password' type='password'/>
        <span>Already a member? <Link to='/login'>Login here</Link></span>        
        <button className={Styles.submitButton} onClick={handleSubmit}>Submit</button>
      </form>
      </div>
    </div>
  );
}
