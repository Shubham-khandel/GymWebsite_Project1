import React, { useState } from "react";
import Styles from "../Registeration/RegestrationForm.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { onLoginName } from "../Registeration/isLoginAtom";
import { useRecoilState } from "recoil";
import { checkLogin } from "../Registeration/isLoginAtom";

export function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerData = JSON.parse(localStorage.getItem("details"));
  const [change, setChange] = useRecoilState(onLoginName);
  const [isLogin, setIsLogin] = useRecoilState(checkLogin);
  // console.log(typeof(registerData.email))

  function handleSubmit(e) {
    e.preventDefault();
    if (email == registerData.email && password == registerData.password) {
      window.alert(`Hiiii ${registerData.username}`);
      navigate("/");
      setIsLogin(false);
      setChange(`Hi, ${registerData.username}`);
    }
    if (password != registerData.password || email != registerData.email) {
      window.alert("Email or Password is incorrect");
    }
  }
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.innerContainer}>
          <form type="submit">
            <h1>Login Here</h1>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
              placeholder="Email"
              type="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
              placeholder="Password"
              type="password"
            />
            <span>
              Not a member? <Link to="/register">Register here</Link>
            </span>
            <button onClick={handleSubmit} className={Styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
