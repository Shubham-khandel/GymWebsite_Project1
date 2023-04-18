import React from 'react'
import style from "./Footer.module.css"

import { FiCamera } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
    return (
      <footer>
      
      <div className={style.main}>
    
      
        <div className={style.main1}>
            <h1 style={{color:"red"}}>GYM</h1>
            <p>Lorem ipsum dolor sitt feugiot varius nue aliquet</p>
           <div className={style.icons}>
              <FiCamera id={style.icon1}/>
              <FaFacebookF id={style.icon2}/>
               <FiTwitter id={style.icon3}/>
           </div>

        </div>
        <div  className={style.main2}>
            <p>Healthy Living</p>
            <p>Loreum</p>
            <p>Loreum ipsum</p>
            <p>Loreum</p>
            <p>Loreum ipsum</p>
        </div>
        <div  className={style.main3}>
            <p>Services</p>
            <p>Loreum</p>
            <p>Loreum ipsum</p>
            <p>Loreum ipsum</p>
            <p>Loreum ipsum</p>
        </div>
        <div  className={style.main4}>
          <p>Programms</p>
            <p>Loreum</p>
            <p>Loreum ipsum</p>
            <p>Loreum ipsum</p>
            <p>Loreum ipsum</p>
        </div>
        
        



       </div>  
      
      </footer>
    
    );
  }
  export default Footer;