import React from "react";
import TrainingPrograms from "./TrainigProgramSection/TrainingPrograms";
import styles from "./Home.module.css";
import AboutUs from "./AboutUs/AboutUs";
import "react-toastify/dist/ReactToastify.css";
import ContainedButton from "../components/UI/Buttons/OutlinedButton";
import PriceCardLight from "../components/UI/PriceCard/PriceCardLight";
import PriceCardPremium from "../components/UI/PriceCard/PriceCardPremium/PriceCardPremium";
import PriceCardStandard from "../components/UI/PriceCard/StandardPlan/PriceCardStandard";
import Footer from "../components/Footer";

import Slider from "./Slider";
function HomePage() {
  const slides = [
    {
      url: "https://wallpaperaccess.com/full/4722369.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/08/10/23/36/street-workout-2628919_960_720.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2015/07/02/10/26/training-828760_960_720.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/09/11/14/23/woman-1661548_960_720.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/04/27/17/45/sport-2266184_960_720.jpg",
    },
  ];
 
  return (
    <>
      <div className={styles.homeSection}>
        <div className={styles.containerStyles}>
          <Slider slides={slides} />
          <div className={styles.text}>
            <div className={styles.content}>
            <h1 className={styles.h1}>Welcome To GYM</h1>
            </div>
           
            <ContainedButton value={"Reserve a Spot"} />
          </div>
          </div>
      </div>
          <AboutUs />
          <TrainingPrograms />
          <div id={styles.pricingSection}>
            <PriceCardLight />
            <PriceCardPremium />
            <PriceCardStandard />
          </div>
          {/* <Footer /> */}
       
    </>
  );
}

export default HomePage;
