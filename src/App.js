import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage, { Price } from "./Pages/HomePage";

import NavBar from "./Components/navBar/NavBar";

import Registration from "./Pages/Registeration/Registration";
import { Login } from "./Pages/Login/Login";
import AboutUs from "./Pages/AboutUs/AboutUs";

import { useLocation } from "react-router-dom";
import TrainingPrograms from "./Pages/TrainigProgramSection/TrainingPrograms";

import Error from "./Pages/Error";
import AboutTrainer from "./Pages/TeamSection/AboutTrainer";

function App() {
  const location = useLocation();
  const validPaths = [
    "/",
    "/aboutus",
    "/traning",
    "/subscription",
    "/abouttrainer",
  ];
  const showNavBar = validPaths.includes(location.pathname);

  return (
    <>
      <div className="App">{showNavBar && <NavBar />}</div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/traning" element={<TrainingPrograms />} />
        <Route path="/subscription" element={<Price />} />
        <Route path="/abouttrainer" element={<AboutTrainer />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
