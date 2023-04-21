import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FiCamera } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
// import Registration from "../Pages/Registeration/Registration";
import { Form } from "./Form";

function Footer() {
  return (
    <footer id={style.footer}>
      <div className={style.main}>
        <div className={style.main1}>
          <h1 style={{ color: "black" }}>GYM</h1>
          <p>500 Terry Francine</p>
          <p>Street San Francisco, CA</p>
          <p>94158</p>
          <p>123-456-7890</p>
          <div className={style.icons}>
           <a > <FiCamera id={style.icon1} /></a>
           <a  href="https://twitter.com/your-twitter-handle"><FiTwitter id={style.icon3} /></a>
            <a href="https://www.facebook.com/your-page"><FaFacebookF id={style.icon2} /></a>
            
            {/* <a href="info@mysite.com">info@mysite.com</a> */}
            {/* <p>© 2035 by Onyx. Powered <br/>and secured by Wix</p> */}
            <p>2035 by Onyx. Powered and secured by Wix</p>
          </div>
        </div>
        
          
          <div className={style.form}>
          <h3>Not a Member? Get a 45 Day Free-Trial</h3>
            <p>
              Fill out the form below and a sales rep will get in touch
              shortly..
            </p>

            <Form />
          </div>
       

        <div className={style.main4}>
          <h3 style={{ padding: "5px" }}>Menu</h3>

          {/* <span><Link to='/' >Home</Link></span><br/> 
         <span> <Link path="/aboutus" >About</Link></span><br/> */}
          <p >Home</p>
          <p >About</p>
          <p >Services</p>
          <p>Membership</p>
          <p >Facilities</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
