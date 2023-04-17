import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import NavBar from "./Pages/NavBar";
import Registration from "./Pages/Registeration/Registration";
import { Login } from "./Pages/Login/Login";

function App() {
  return (
    <>
      <NavBar />
      
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/register" element={<Registration/>} />
      </Routes>
    </>
  );
}

export default App;
