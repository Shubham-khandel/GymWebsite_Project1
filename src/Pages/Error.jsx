import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Error.module.css";
function Error() {
  return (
    <div className={styles.errorDiv}>
        <img src="https://cdn2.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg"/>
      <div className={styles.msg}>
      <h1 className={styles.texts}>oop's</h1>
      <p className={styles.message}>It seems went something wrong</p>
      <button className={styles.redirect}>
        <NavLink className={styles.link} to="/">Home Page</NavLink>
      </button>
      </div>
      
    </div>
  );
}

export default Error;
