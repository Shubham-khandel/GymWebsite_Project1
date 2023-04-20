import React from "react";
import TrainingPrograms from "./TrainigProgramSection/TrainingPrograms";
import styles from "./Home.module.css";
import Footer from "../components/Footer";
import AboutUs from "./AboutUs/AboutUs";
import "react-toastify/dist/ReactToastify.css";


import ContainedButton from "../components/UI/Buttons/OutlinedButton";

import Slider from "./Slider";
// import styles from "./Home.module.css";
// import Footer from "../components/Footer";

const slides = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMs9BiZ0-JjSrNNNjqGFHhXwyJRGRjIjiNcjcN-QoQUlV4rdoBzNe380tEz_IBjATcirE&usqp=CAU",
  },
  {
    url: "https://media.istockphoto.com/id/1320144030/photo/still-life-shot-of-exercise-equipment-in-a-gym.webp?s=1024x1024&w=is&k=20&c=4ZgAJIZv7cCwmt-yWoCoRY20VvRCWxwKqo7u9H-yYWw=",
  },
  {
    url: "https://thumbs.dreamstime.com/b/dumbbells-shelf-workout-gym-copy-space-blurred-gym-background-preparation-gym-exercises-workout-gym-161393354.jpg",
  },
  {
    url: "https://thumbs.dreamstime.com/b/dumbbell-barbell-workout-gym-empty-space-blurred-gym-background-dumbbell-barbell-workout-gym-space-161296647.jpg",
  },
  {
    url: "https://thumbs.dreamstime.com/b/dumbbells-shelf-workout-gym-copy-space-blurred-gym-background-preparation-gym-exercises-workout-gym-161393354.jpg",
  },
];

const containerStyles = {
  width: "100vw",
  height: "100vh",

  border: "1px solid green",
};
import ContainedButton from "../Components/UI/Buttons/OutlinedButton";
import Slider from "./Slider";
import PriceCardLight from "../Components/UI/PriceCard/PriceCardLight";
import PriceCardPremium from "../Components/UI/PriceCard/PriceCardPremium/PriceCardPremium";
import PriceCardStandard from "../Components/UI/PriceCard/StandardPlan/PriceCardStandard";


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
  const containerStyles = {
    width: "100vw",
    height: "100vh",

    border: "1px solid green",
  };
  return (

    <>

    <div className={styles.homeSection}>
      <div style={containerStyles}>
        <Slider slides={slides} />
        <div className={styles.text}>
          <h1 className={styles.h1}>Welcome To GYM</h1>
          <ContainedButton value={"Reserve a Spot"} />
          {/* <div style={containerStyles}><Slider slides={slides} /></div> */}
        </div>

        <div>
          <AboutUs />
          <TrainingPrograms />
          <Footer />
        </div>

      </div> 
     </div>
    </>

      </div>

      <AboutUs />
      <TrainingPrograms />
      <div id={styles.pricingSection}>
        <PriceCardLight />
        <PriceCardPremium />
        <PriceCardStandard />
      </div>
      <Footer />

    
    </div>

  );
}

export default HomePage;
