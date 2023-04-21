import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./RegestrationForm.module.css";
import { checkLogin } from "./isLoginAtom";
import { useRecoilState } from "recoil";

import { useNavigate } from "react-router-dom";

export default function Registration() {
  const initialData = { username: "", email: "", number: "", password: "" };
  const [userDetails, setUserDetails] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(checkLogin);

  function handleChange(e) {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  }
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validation(userDetails));
    setIsSubmit(true);
    setIsLogin(true);

    if (Object.keys(errors).length === 0 && isSubmit) {
      navigate("/");
      setIsLogin(true);
    }
  }
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      localStorage.setItem("details", JSON.stringify(userDetails));
    }
  }, [errors]);

  function validation(values) {
    const errorss = {};
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.username) {
      errorss.username = "Username is required";
    }
    if (!values.email) {
      errorss.email = "email is required";
    } else if (!regEx.test(values.email)) {
      errorss.email = "This is not a valid email";
    }
    if (!values.number) {
      errorss.number = "number is required";
    } else if (values.number.length < 10) {
      errorss.number = "This is not a valid Phone Number";
    }
    if (!values.password) {
      errorss.password = "password is required";
    } else if (values.password.length < 6) {
      errorss.password = "Please enter a strong password";
    }

    return errorss;
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <form type="submit">
          <h1>Register Here</h1>
          {Object.keys(errors).length === 0 && isSubmit ? (
            <p className={Styles.success}>Regestration Successful</p>
          ) : (
            <p></p>
          )}
          <input
            name="username"
            value={userDetails.username}
            onChange={handleChange}
            placeholder="Full Name"
            type="text"
          />
          <p className={Styles.warning}>{errors.username}</p>
          <input
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
          />
          <p className={Styles.warning}>{errors.email}</p>
          <input
            name="number"
            value={userDetails.number}
            onChange={handleChange}
            placeholder="Phone Number"
            type="number"
          />
          <p className={Styles.warning}>{errors.number}</p>
          <input
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            placeholder="Enter password"
            type="password"
          />
          <p className={Styles.warning}>{errors.password}</p>
          <span className={Styles.loginBtn}>
            Already a member? <Link to="/login">Login here</Link>
          </span>
          <button className={Styles.submitButton} onClick={handleSubmit}>
            {Object.keys(errors).length === 0 && isSubmit ? (
              <p>Go to home</p>
            ) : (
              <p>Submit</p>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
