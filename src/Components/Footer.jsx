import React from "react";
import style from "./Footer.module.css";
import { Link } from 'react-router-dom';
import { FiCamera } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className={style.main}>
        <div className={style.main1}>
          <h1 style={{ color: "black" }}>ONYX</h1>
          <p>500 Terry Francine</p>
          <p>Street San Francisco, CA</p>
          <p>94158</p>
          <p>123-456-7890</p>
          <div className={style.icons}>
            <FiCamera id={style.icon1} />
            <FaFacebookF id={style.icon2} />
            <FiTwitter id={style.icon3} />
            {/* <a href="info@mysite.com">info@mysite.com</a> */}
            {/* <p>© 2035 by Onyx. Powered <br/>and secured by Wix</p> */}
          </div>
        </div>
        <div className={style.main2}>
          <h3>Not a Member? Get a 45 Day Free-Trial</h3>
          <p>Fill out the form below and a sales rep <br/>will get in touch shortly.</p>
        </div>
        
        <div className={style.main4}>
          <h3 style={{padding:"5px"}}>Menu</h3>
         <span><Link to='/' style={{textDecoration:"none",color:"black",padding:"5px"}}>Home</Link></span><br/> 
         <span> <Link path="/aboutus" style={{textDecoration:"none",color:"black",padding:"5px"}}>About</Link></span><br/>
          <p style={{ padding:"5px"}}>Services</p>
          <p style={{padding:"5px"}}>Membership</p>
          <p style={{padding:"5px"}}>Facilities</p>
        </div>
         
      </div>
    </footer>
  );
}
export default Footer;
