import { useState,useEffect } from "react";
import React from "react";
import Styles from "./Form.module.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [details, setDetails] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const obj = { name: name, email: email, number: number, password: password };
  // const getData = localStorage.getItem('userdetails')

  function handleSubmit(e) {
    e.preventDefault();
    let newData = [...details, obj];
    setDetails(newData);
    console.log(newData);
    localStorage.setItem("details", JSON.stringify(newData));
    if(localStorage.setItem){
      setSubmit(true);
    }
    
    if (submit) {
      toast.success("Form submitted successfully!");
    } else {
      toast.error("Error submitting form. Please try again.");
    }
    setEmail("");
    setName("");
    setNumber("");
    setPassword("");
  }
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      localStorage.setItem("details", JSON.stringify(details));
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
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            type="text"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />

          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number"
            type="number"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Add a message"
            type="text"
          />

          <button className={Styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
