import React from "react";
import TrainingPrograms from "./TrainigProgramSection/TrainingPrograms";
import Footer from "../Components/Footer";
import AboutUs from "./AboutUs/AboutUs";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Footer />

      <AboutUs />
      <TrainingPrograms />
    </div>
  );
}

export default HomePage;
