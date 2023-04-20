import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import NavBar from "./Components/navBar/NavBar";

// import NavBar from "./components/navBar/NavBar";
// import Slider from "./Pages/Slider";

import Registration from "./Pages/Registeration/Registration";
import { Login } from "./Pages/Login/Login";
import AboutUs from "./Pages/AboutUs/AboutUs";

import { useLocation } from "react-router-dom";
import TrainingPrograms from "./Pages/TrainigProgramSection/TrainingPrograms";
import PriceSection from './Pages/PriceSection';

function App() {
  const location = useLocation();
  // if (location.pathname !== '/login') {
  // render navbar here
  // <NavBar/>
  // }
  return (
    <>
      <div className="App">
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && <NavBar />}
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/traning" element={<TrainingPrograms />} />
        <Route path="/subscription" element={<PriceSection />} />

        <Route path="*" element={<h1>Error 404 Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
