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
    <footer>
      <div className={style.main}>
        <div className={style.main1}>
          <h1 style={{ color: "black" }}>ONYX</h1>
          <p style={{ padding: "0.2rem" }}>500 Terry Francine</p>
          <p style={{ padding: "0.2rem" }}>Street San Francisco, CA</p>
          <p style={{ padding: "0.2rem" }}>94158</p>
          <p style={{ padding: "0.2rem" }}>123-456-7890</p>
          <div className={style.icons}>
            <FiCamera id={style.icon1} />
            <FaFacebookF id={style.icon2} />
            <FiTwitter id={style.icon3} />
            {/* <a href="info@mysite.com">info@mysite.com</a> */}
            {/* <p>© 2035 by Onyx. Powered <br/>and secured by Wix</p> */}
            <p>2035 by Onyx. Powered and secured by Wix</p>
          </div>
        </div>
        <div className={style.main2}>
          <div className={style.main21}>
            <h3>Not a Member? Get a 45 Day Free-Trial</h3>
            <p>
              Fill out the form below and a sales rep will get in touch
              shortly..
            </p>
          </div>
          <div className={style.form}>
            <Form />
          </div>
        </div>

        <div className={style.main4}>
          <h3 style={{ padding: "5px" }}>Menu</h3>

          {/* <span><Link to='/' >Home</Link></span><br/> 
         <span> <Link path="/aboutus" >About</Link></span><br/> */}
          <p style={{ padding: "0.3rem" }}>Home</p>
          <p style={{ padding: "0.3rem" }}>About</p>
          <p style={{ padding: "0.3rem" }}>Services</p>
          <p style={{ padding: "0.3rem" }}>Membership</p>
          <p style={{ padding: "0.3rem" }}>Facilities</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
