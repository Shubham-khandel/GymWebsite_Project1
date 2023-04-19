import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import NavBar from "./Components/navBar/NavBar";


// import Slider from "./Pages/Slider";


import Registration from "./Pages/Registeration/Registration";
import { Login } from "./Pages/Login/Login";
import AboutUs from "./Pages/AboutUs/AboutUs";

import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  if (location.pathname !== '/login') {
    // render navbar here
    <NavBar/>
  }
  return (
    <>
      <div className="App">
        
      {location.pathname !== '/login' && <NavBar />}
      </div>




      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={<h1>Error 404 Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
