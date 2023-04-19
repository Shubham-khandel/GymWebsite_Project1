import React from "react";
import TrainingPrograms from "./TrainigProgramSection/TrainingPrograms";

import AboutUs from "./AboutUs/AboutUs";

import styles from "./Home.module.css";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <div>
      <div className={styles.homeSection}>
        <AboutUs />
        <TrainingPrograms />

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
