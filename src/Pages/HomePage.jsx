
import React from 'react'
import Footer from '../components/Footer";
import React from "react";
import TrainingPrograms from "./TrainigProgramSection/TrainingPrograms";


function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
       <Footer/>

      <h1 id="about">About Us</h1>
      <TrainingPrograms />

    </div>
  );
}

export default HomePage;
