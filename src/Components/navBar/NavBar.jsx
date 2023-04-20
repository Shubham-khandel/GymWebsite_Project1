import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../../Pages/Registeration/isLoginAtom";
import {useRecoilValue} from 'recoil'

const NavBar = () => {
  const [isMobile, setMobile] = useState(false);
  const navigate=useNavigate();
  function handleLogin(){
  let users= JSON.parse(localStorage.getItem("details"));
  if(users){
    navigate("/login")
  }
  else{
    navigate("/register")
  }
    
  }
  const isLogin = useRecoilValue(checkLogin)
  return (
    <nav className={styles.mainNav}>
      <div className={styles.logo}>
        <h2>GYM</h2>
      </div>
      <div className={isMobile ? styles.navbarMobile : styles.links}>
        <ul>
          <li>
            <NavLink className={styles.navlink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navlink} to="/aboutus">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navlink} to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.button}>
        <button onClick={handleLogin} className={styles.btn}>{isLogin?(<p>Log Out</p>):(<p>Join us</p>)}</button>
      </div>
      <div className={styles.userProfile}>
        <div className={styles.menuBtn}>
          <button onClick={() => setMobile(!isMobile)}>
            {isMobile ? (
              <i className="fas fa-times">
                <ImCross />
              </i>
            ) : (
              <i className="fas fa-bars">
                <GiHamburgerMenu />
              </i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
