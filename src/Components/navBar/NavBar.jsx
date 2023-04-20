import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.logo}>
        <h2>GYM</h2>
      </div>
      <div className={styles.links}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/aboutus'>About Us</Link></li>
          <li><Link to='/login'>Login</Link></li>
         
        </ul>
        
        

      </div>
      <div className={styles.button}>
        <button onClick={handleLogin} className={styles.btn}>Join us</button>
        <button className={styles.btn}>Join us</button>
      </div>

    </nav>
  )
}

export default NavBar
