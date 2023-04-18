import React, { useState } from "react";
import Styles from "../Registeration/RegestrationForm.module.css";
import { Link } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.innerContainer}>
          <form type="submit">
            <h1>Login Here</h1>
            <span>Email:</span>
            <input value={email} placeholder="Email" type="email" />
            <span>Enter Password:</span>
            <input value={password} placeholder="Password" type="password" />
            <span>
              Not a member? <Link to="/register">Register here</Link>
            </span>
            <button className={Styles.submitButton}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
