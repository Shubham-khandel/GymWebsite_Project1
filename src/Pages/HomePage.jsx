import React from "react";
import TrainingPrograms from "./TrainigProgramSection/TrainingPrograms";

import AboutUs from "./AboutUs/AboutUs";

import Footer from "../components/Footer";



import styles from './Home.module.css'

     




function HomePage() {
  return (
    <div>
    <div className={styles.homeSection}>
      
      
      
       

      <AboutUs />
      <TrainingPrograms />

      <Footer/>
    </div>
    </div>
  );
}

export default HomePage;
